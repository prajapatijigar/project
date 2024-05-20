import React from "react";
import Header from "./Common/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import TaskRoutes from "./TaskPages/TaskRoutes";
import HooksRoutes from "./Hooks/HooksRoutes";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import ParentLogin from "./Pages/LoginCompo/ParentLogin";
import LoginCompo from "./Pages/LoginCompo/LoginCompo";
import Registration from "./Pages/LoginCompo/Registration";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
         <Header /><Home />
      </PrivateRoute> 
    )
  },
  {
    path: "/about",
    element: <><Header /><About /></>
  },
  {
    path: "/menu",
    element: <><Header /><Menu /></>,
    children: [
      {
        path: "task/*",
        element: <><TaskRoutes /></>
      }
    ],
  },
  {
    path: "/product",
    element: <><Header /><Product /></>
  },
  {
    path: "/services",
    element: <><Header /><Services /></>,
    children: [
      {
        path: "hooks/*",
        element: <><HooksRoutes /></>
      }
    ],
  },
  {
    path: "/login",
    element: <><Header /><Login /></>
  },
  {
    path: "/parentlogin",
    element: <><Header /><ParentLogin /></>,
    children: [
      {
        path: "logincompo", // relative path, without leading slash
        element: <><LoginCompo /></>
      },
      {
        path: "register", // relative path, without leading slash
        element: <><Registration /></>
      }
    ]
  }
]);

export default routes;
