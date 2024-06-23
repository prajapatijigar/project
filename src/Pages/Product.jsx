import React from "react";
import ProductHeader from "../ProductCompo/ProductHeader.jsx";
import ProductFooter from "../ProductCompo/ProductFooter.jsx";
import AllProduct from "../ProductCompo/AllCartProduct.jsx";


const Product = () => {
  return (
    <>
       <ProductHeader/>
       <AllProduct/>
       <ProductFooter/>
    </>
  );
};

export default Product;
