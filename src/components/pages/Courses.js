import React, { useEffect, useState } from "react";
import CoursesContainer from "../shared/CoursesContainer";
import Sidebar from "./../shared/Sidebar";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://tech-teaching-club-server-side.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <CoursesContainer courses={courses} />
    </div>
  );
};

export default Courses;
