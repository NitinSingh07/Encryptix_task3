import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newslatter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email Me
        </h3>
        <p className="text-primary/70 text-base mb-4">
          {" "}
          E-mail me for more information.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      {/* 2nd part */}
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed!
        </h3>
        <p className="text-primary/70 text-base mb-4">
          Get noticed faster by uploading your resume.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload Resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
