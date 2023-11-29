import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Properties from "../Pages/Properties";
import AddProperties from "../Pages/Dashboard/AddProperty";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import UpdateProperty from "../Pages/Dashboard/UpdateProperty";
import Details from "../Pages/Details";
import Wishlist from "../Pages/Dashboard/Wishlist";
import MakeOffer from "../Pages/Dashboard/MakeOffer";
import MyReviews from "../Pages/Dashboard/MyReviews";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AllProperty from "../Pages/Dashboard/AllProperty";
import AgentProperties from "../Pages/Dashboard/AgentProperties";
import ManageReviews from "../Pages/Dashboard/ManageReviews";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/properties",
        element: (
          <PrivateRoute>
            <Properties></Properties>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProperty/>
          </PrivateRoute>
        ),
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "add",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "property",
        element: <AllProperty></AllProperty>,
      },
      {
        path: "agentproperty",
        element: <AgentProperties></AgentProperties>
      },

      {
        path: "users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "myreviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "allreviews",
        element: <ManageReviews></ManageReviews>
      },
      {
        path: "makeOffer",
        element: <MakeOffer></MakeOffer>,
      },
    ],
  },
]);
export default Router;
