import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://tech-teaching-club-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-sky-500 w-[250px] h-[100vh] hidden md:block sticky top-0 p-4">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className="mb-3 bg-white text-black rounded p-2 text-center font-medium text-lg"
          >
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
