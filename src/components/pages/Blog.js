import React from "react";
import blogs from "../../blogs/blogs";
import BlogCard from "../shared/BlogCard";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:p-20 p-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
