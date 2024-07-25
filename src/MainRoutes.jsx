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
import CategoriesMenuCart from "./ProductCompo/CategoriesMenuCart";
import { CartProvider } from "./ProductCompo/CartContext";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <CartProvider>
                    <Header />
                    <Home />
                </CartProvider>
            </PrivateRoute>
        ),
    },
    {
        path: "/about",
        element: (
            <CartProvider>
                <Header />
                <About />
            </CartProvider>
        ),
    },
    {
        path: "/menu",
        element: (
            <CartProvider>
                <Header />
                <Menu />
            </CartProvider>
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
            <CartProvider>
                <Header />
                <Product />
            </CartProvider>
        )
    },
    {
        path: "/categories/:slug",
        element: (
            <CartProvider>
                <Header />
                <CategoriesMenuCart />
                
            </CartProvider>
        )
    },
    {
        path: "/product/:id",
        element: (
            <CartProvider>
                <Header />
                <ProductHeader />
                <ProductDetail />
            </CartProvider>
        )
    },
    {
        path: "/services",
        element: (
            <CartProvider>
                <Header />
                <Services />
            </CartProvider>
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
            <CartProvider>
                <Header />
                <Login />
            </CartProvider>
        ),
    },
    {
        path: "/parentlogin",
        element: (
            <CartProvider>
                <Header />
                <ParentLogin />
            </CartProvider>
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
