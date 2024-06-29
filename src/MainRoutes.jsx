import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./Common/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import TaskRoutes from "./TaskPages/TaskRoutes";
import HooksRoutes from "./Hooks/HooksRoutes";
import Login from "./Pages/Login";
import ParentLogin from "./Pages/LoginCompo/ParentLogin";
import LoginCompo from "./Pages/LoginCompo/LoginCompo";
import Registration from "./Pages/LoginCompo/Registration";
import PrivateRoute from "./PrivateRoute";
import ProductDetail from "./ProductCompo/ProductDetails";
import ProductHeader from "./ProductCompo/ProductHeader";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Header />
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/menu",
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
    children: [
      {
        path: "task/*",
        element: <TaskRoutes />,
      },
    ],
  },
  {
    path: "/product",
    element: (
      <>
        <Header />
        <Product />
      </>
    )
  },
  {
    path: "/product/:id",
    element  : <><Header /><ProductHeader/><ProductDetail /></>
  },
  {
    path: "/services",
    element: (
      <>
        <Header />
        <Services />
      </>
    ),
    children: [
      {
        path: "hooks/*",
        element: <HooksRoutes />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "/parentlogin",
    element: (
      <>
        <Header />
        <ParentLogin />
      </>
    ),
    children: [
      {
        path: "logincompo",
        element: <LoginCompo />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
]);

export default routes;
