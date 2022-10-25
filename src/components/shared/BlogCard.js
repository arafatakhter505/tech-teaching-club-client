import React from "react";

const BlogCard = ({ blog }) => {
  const { title, des } = blog;
  return (
    <div className="shadow-lg p-6 border-2 border-sky-100 rounded-lg">
      <h2 className="text-2xl mb-4">{title}</h2>
      <p>{des}</p>
    </div>
  );
};

export default BlogCard;
