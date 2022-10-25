import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, titel, img, price, ratings } = course;
  return (
    <div className="shadow-lg p-6 border-2 border-sky-100 rounded-lg">
      <img src={img} className="w-full md:h-[300px]" alt="courseimage" />
      <h3 className="font-semibold text-2xl mt-2">
        {titel.length > 30 ? `${titel.slice(0, 30) + "..."}` : titel}
      </h3>
      <div className="mt-6 flex justify-between items-center">
        <p className="flex items-center">Ratings: {ratings}</p>
        <p>Price: {price}</p>
      </div>
      <Link to={`/course/${id}`}>
        <button className="bg-sky-500 text-white w-full py-2 mt-4">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
