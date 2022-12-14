import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../assets";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const { googleSignIn, githubSignIn, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully Completed");
        navigate("/");
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGithub = () => {
    githubSignIn()
      .then(() => {
        toast.success("Successfully Completed");
        navigate("/");
      })
      .catch((e) => toast.error(e.message));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.cpassword.value;

    if (password.length < 6) {
      toast.error("Password should be 6 characters or more.");
    }
    if (password !== confirmPass) {
      toast.error("password did not match");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => toast.success("Successfully Completed"))
          .catch((e) => toast.error(e.message));
        navigate("/");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex justify-between items-center md:flex-row flex-col lg:px-[80px] md:px-[50px] px-[20px] py-[50px] ">
      <div className="md:w-1/2 md:pr-12">
        <img src={register} alt="" />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-4xl font-bold text-sky-500 md:mt-0 mt-6 mb-6 md:text-left text-center">
          Get Started
        </h3>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="block bg-sky-100 w-full px-2 py-2 rounded mt-2 mb-6 focus:outline-none"
              placeholder="Enter full name"
              required
            />
          </div>
          <div>
            <label htmlFor="photo">Photo URL</label>
            <input
              id="photo"
              name="photoURL"
              type="text"
              className="block bg-sky-100 w-full px-2 py-2 rounded mt-2 mb-6 focus:outline-none"
              placeholder="Enter photo url"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="block bg-sky-100 w-full px-2 py-2 rounded mt-2 mb-6 focus:outline-none"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="block bg-sky-100 w-full px-2 py-2 rounded mt-2 mb-6 focus:outline-none"
              placeholder="*********"
              required
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              name="cpassword"
              type="password"
              className="block bg-sky-100 w-full px-2 py-2 rounded mt-2 mb-6 focus:outline-none"
              placeholder="*********"
              required
            />
          </div>
          <button
            className="bg-sky-500 text-white px-4 py-2 w-full my-6 rounded"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-sky-500">
            Login
          </Link>
        </p>
        <div className="text-center">
          <h3 className="my-4 md:text-2xl">-------------- or --------------</h3>
          <button
            onClick={handleGoogle}
            className="my-2 border border-sky-500 p-2 rounded-md mx-2"
          >
            Continue With Google
          </button>
          <button
            onClick={handleGithub}
            className="my-2 border border-sky-500 p-2 rounded-md mx-2"
          >
            Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
