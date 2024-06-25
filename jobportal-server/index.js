const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

// middlewares
app.use(cors());
app.use(express.json());

// momgodb

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j4ljifi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create db
    const database = client.db("mernJobPortal");
    const jobsCollections = database.collection("demoJobs");

    // post a job
    app.post("/post-job", async (req, res) => {
      const job = req.body;
      const result = await jobsCollections.insertOne(job);
      console.log("job added", result);
      res.json(result);
    });

    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find({}).toArray();
      res.json(jobs);
    });

    // get single job
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollections.findOne({ _id: new ObjectId(id) });
      res.json(job);
    });

    // get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobsCollections
        .find({ postedBy: req.params.email })
        .toArray();
      res.json(jobs);
    });

    // delete a job
    app.delete("/delete-job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollections.deleteOne(filter);
      res.json(result);
    });

    // update a job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const updatedJob = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          jobTitle: updatedJob.jobTitle,
          companyName: updatedJob.companyName,
          minPrice: updatedJob.minPrice,
          maxPrice: updatedJob.maxPrice,
          salaryType: updatedJob.salaryType,
          jobLocation: updatedJob.jobLocation,
          postingDate: updatedJob.postingDate,
          experienceLevel: updatedJob.experienceLevel,
          companyLogo: updatedJob.companyLogo,
          employmentType: updatedJob.employmentType,
          description: updatedJob.description,
          postedBy: updatedJob.postedBy,
          skills: updatedJob.skills,
        },
      };
      const result = await jobsCollections.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
