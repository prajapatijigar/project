import React from "react";
import ProductHeader from "../ProductCompo/ProductHeader.jsx";
import ProductFooter from "../ProductCompo/ProductFooter.jsx";
import AllProduct from "../ProductCompo/AllCartProduct.jsx";
import { CartProvider } from "../ProductCompo/CartContext.jsx";

const Product = () => {
    return (
        <>
            <CartProvider>
                <ProductHeader />
                <AllProduct />
                <ProductFooter />
            </CartProvider>
        </>
    );
};

export default Product;
