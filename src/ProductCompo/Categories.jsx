import React from "react";
import CategoriesCart from "./CategoriesCart";
import Styles2 from "../css/categories.module.css";

const Categories = () => {
  return (
    <>
      <ul className={Styles2.categories}>
        <CategoriesCart />
        <CategoriesCart />
        <CategoriesCart />
        <CategoriesCart />
      </ul>
    </>
  );
};

export default Categories;
