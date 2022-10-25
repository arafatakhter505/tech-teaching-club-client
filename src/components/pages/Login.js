import React, { useContext } from "react";
import { login } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { googleSignIn, githubSignIn, logIn } = useContext(AuthContext);
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

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        toast.success("Successfully login");
        navigate("/");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex justify-between items-center md:flex-row flex-col-reverse lg:px-[80px] md:px-[50px] px-[20px] py-[50px] ">
      <div className="md:w-1/2 md:pr-8">
        <h3 className="text-4xl font-bold text-sky-500 md:mt-0 mt-6 mb-6 md:text-left text-center">
          Log in
        </h3>
        <form onSubmit={handleLogin}>
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
          <button>Forgot Password</button>
          <button
            className="bg-sky-500 text-white px-4 py-2 w-full my-6 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-sky-500">
            Register
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
      <div className="md:w-1/2">
        <img src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
