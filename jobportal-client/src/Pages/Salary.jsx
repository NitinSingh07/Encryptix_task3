import React, { useEffect, useState } from "react";

const Salary = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setsalary] = useState([]);

  useEffect(() => {
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => setsalary(data));
  }, [searchText]);

  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(filter);
    setsalary(filter);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center">
        <div>
          <h2 className="text-3xl text-blue font-medium mb-1 text-center">
            Estimate Salary
          </h2>
          <p className="text-sm text-center">
            <a href="/"> Home </a> / Salary
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-2 border focus:outline-none lg:w-6/12 mb-4 w-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white rounded-sm font-semibold px-8 py-2 mb-4"
          >
            Search
          </button>
        </div>
      </div>

      {/* salary display card */}

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
        {salary.map((data) => (
          <div key={data.id} className="shadow px-4 py-8">
            <h4 className="font-semibold text-xl">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/" className="underline text-green-600">
                {data.status}
              </a>
              <a href="/" className="underline text-red-500">
                {data.skills}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salary;
