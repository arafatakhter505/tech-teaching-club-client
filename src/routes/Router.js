import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/pages/Blog";
import Categoriy from "../components/pages/Categoriy";
import Checkout from "../components/pages/Checkout";
import CourseDetails from "../components/pages/CourseDetails";
import Courses from "../components/pages/Courses";
import Error from "../components/pages/Error";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Profile from "../components/pages/Profile";
import Register from "../components/pages/Register";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/category/:category",
        element: <Categoriy />,
        loader: ({ params }) =>
          fetch(
            `https://tech-teaching-club-server-side.vercel.app/courses/${params.category}`
          ),
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(
            `https://tech-teaching-club-server-side.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-teaching-club-server-side.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
