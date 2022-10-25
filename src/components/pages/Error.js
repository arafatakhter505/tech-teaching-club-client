import React from "react";
import { error } from "../../assets";

const Error = () => {
  return (
    <div className="flex justify-center mt-8">
      <img src={error} className="md:w-1/3" alt="" />
    </div>
  );
};

export default Error;
