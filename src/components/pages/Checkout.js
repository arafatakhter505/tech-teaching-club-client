import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  return (
    <div className="flex justify-center mt-12 p-8">
      <div className="p-8 shadow-lg border-2 rounded flex flex-col items-center">
        <p className="text-sky-500 text-3xl font-medium">Congratulation!!</p>
        <h2 className="text-center md:text-4xl text-2xl my-4">
          {course.titel}
        </h2>
        <p className="text-center text-sky-500 md:text-3xl text-xl">
          Successfully premium access
        </p>
        <Link to={"/"}>
          <button className="bg-sky-500 text-white px-4 py-2 mt-6 rounded">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
