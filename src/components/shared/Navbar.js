import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { close, Logo, menu, profile } from "../../assets";
import { FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "./../../contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleTheme = () => {
    setIsDark(!isDark);
  };
  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex justify-between items-center px-[20px] md:px-[50px] lg:px-[80px] py-[20px] shadow-md relative">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          className="md:w-[250px] md:h-auto w-[120px] h-[50px]"
        />
      </Link>
      <ul className="lg:flex items-center hidden">
        <li className="ml-6 text-lg font-semibold hover:text-sky-500">
          <Link to={"/courses"}>Courses</Link>
        </li>
        <li className="ml-6 text-lg font-semibold hover:text-sky-500">
          <Link>FAQ</Link>
        </li>
        <li className="ml-6 text-lg font-semibold hover:text-sky-500">
          <Link>Blog</Link>
        </li>
        <li
          onClick={handleTheme}
          className="ml-6 text-lg font-semibold hover:text-sky-500 cursor-pointer"
        >
          {isDark ? <FaMoon /> : <FaSun />}
        </li>
        <li className="ml-6 text-lg font-semibold hover:text-sky-500">
          {user?.uid ? (
            <>
              <Link to={"/profile"}>
                <img
                  title={user?.displayName}
                  src={user?.photoURL ? user.photoURL : profile}
                  className="w-[40px] rounded-full"
                  alt="profile"
                />
              </Link>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="bg-sky-500 text-white px-4 py-1">Login</button>
            </Link>
          )}
        </li>
      </ul>

      <div className="lg:hidden flex items-center">
        <div
          onClick={handleTheme}
          className="mr-3 text-lg font-semibold hover:text-sky-500 cursor-pointer text-center"
        >
          {isDark ? <FaMoon /> : <FaSun />}
        </div>
        {user?.uid ? (
          <>
            <Link to={"/profile"}>
              <img
                title={user?.displayName}
                src={user?.photoURL ? user.photoURL : profile}
                className="w-[40px] rounded-full mr-3"
                alt="profile img"
              />
            </Link>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="bg-sky-500 text-white px-3 py-2 mr-3">
              Login
            </button>
          </Link>
        )}

        <div className="w-[20px]">
          <img
            className="cursor-pointer"
            onClick={handleMenu}
            src={toggle ? close : menu}
            alt="mobile menu"
          />
        </div>
        {toggle && (
          <ul className="absolute top-[100px] right-0 w-[100%] p-4 text-center bg-white shadow-md">
            <li className="text-lg font-semibold hover:text-sky-500">
              <Link to={"courses"}>Courses</Link>
            </li>
            <li className="text-lg font-semibold hover:text-sky-500">
              <Link>FAQ</Link>
            </li>
            <li className="text-lg font-semibold hover:text-sky-500">
              <Link>Blog</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
