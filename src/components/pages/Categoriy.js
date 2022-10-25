import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import CoursesContainer from "./../shared/CoursesContainer";

const Categoriy = () => {
  const courses = useLoaderData();
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <h2 className="text-2xl pl-12 pt-8">
          Category Items: {courses.length}
        </h2>
        <CoursesContainer courses={courses} />
      </div>
    </div>
  );
};

export default Categoriy;
