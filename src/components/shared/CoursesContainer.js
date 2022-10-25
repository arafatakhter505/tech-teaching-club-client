import React from "react";
import CourseCard from "./CourseCard";

const CoursesContainer = ({ courses }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:p-20 p-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesContainer;
