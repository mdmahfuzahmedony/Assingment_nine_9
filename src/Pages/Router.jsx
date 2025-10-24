import { createBrowserRouter } from "react-router";
import MainRouter from "./MainRouter";
import Home from "../Component/Home";
import Login from "./Login";
import Register from "./Register";
import ToyDetails from "./../Component/ToyDetails";
import AllToy from "../Component/Alltoy";
import PrivateRoute from "../Privet/PrivetRouter";
import MyProfile from "../Component/MyProfile";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    Component: MainRouter,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/alltoy",
        Component: AllToy,
      },
      {
        path: "/myprofile",
        Component: () => (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/toys/:id",
        Component: () => (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
