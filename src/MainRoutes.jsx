import React from "react";
import Header from "./Common/Header"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu  from "./Pages/Menu";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import TaskRoutes from "./TaskPages/TaskRoutes";
import HooksRoutes from "./Hooks/HooksRoutes";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";

const  routes = createBrowserRouter([
   {
    path: "/",
    element : <><Header/><Home/></>
   },
   {
    path : "/about",
    element : <><Header/><About/></>
   },
   {
    path : "/menu",
    element : <><Header/><Menu/></>,
    children : [
      {
          path : "task/*",
          element: <><TaskRoutes/></>
      }
    ],
   },
   {
    path : "/product",
    element : <><Header/><Product/></>
   },
   {
    path : "/services",
    element : <><Header/><Services/></>,
    children : [
      {
          path : "hooks/*",
          element: <><HooksRoutes/></>
      }
    ],
   },
   {
    path : "/login",
    element : <><Header/><Login/></>
   }

])

export default routes;