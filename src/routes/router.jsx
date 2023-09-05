import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Staff from "../pages/Staff";
import Table from "../pages/Table";
import Layout from "../components/layout/Layout";
import Customer from "../pages/Customer";
import Laporan from "../pages/Laporan";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("authorization")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (localStorage.getItem("authorization")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("authorization")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/meja",
        element: <Table />,
      },
      {
        path: "/laporan",
        element: <Laporan />,
      },
    ],
  },
]);

export default router;
