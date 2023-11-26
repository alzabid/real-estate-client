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
import Card from "../Components/Card";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import UpdateProperty from "../Pages/Dashboard/UpdateProperty";


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
        path: "update",
        element: <UpdateProperty></UpdateProperty>
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "users",
        element: <ManageUsers></ManageUsers>
      },
    ],
  },
]);
export default Router;
