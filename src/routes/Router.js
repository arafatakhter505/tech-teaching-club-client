import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/pages/Courses";
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
    ],
  },
]);

export default router;
