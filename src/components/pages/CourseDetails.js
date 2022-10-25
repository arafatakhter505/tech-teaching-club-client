import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  return (
    <div className="lg:px-[80px] md:px-[50px] px-[20px] py-[30px] ">
      <div className="flex justify-between items-center bg-sky-500 text-white rounded mt-8 p-10">
        <h2 className="text-3xl font-semibold">{course.titel}</h2>
        <button className="bg-white text-black px-4 py-2 rounded">
          PDF Download
        </button>
      </div>
      <div className="flex my-8">
        <img
          src={course.img}
          className="border-2 p-2 border-sky-500 rounded-lg"
          alt=""
        />
        <div className="pl-8">
          <h3 className="text-3xl mb-8">What you'll learn</h3>
          <ul className="list-disc pl-6">
            {course.learn.map((item, i) => (
              <li className="mb-4" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h2 className="text-center text-4xl my-6">Description</h2>
      <div>{course.des}</div>
      <h2 className="text-4xl my-6">Requirments</h2>
      <div>
        {course.requirments.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
      {course.topic_covered.length > 0 && (
        <>
          <h3 className="text-2xl my-4">Topics cover in this course:</h3>
          {course.topic_covered.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </>
      )}
      <div className="mt-8">
        <button className="bg-sky-500 text-white px-4 py-2">
          Get premium access
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
