import React from "react";
import Styles from "../css/categories.module.css";
import ShopBG from "../Images/shopBG.jpg";
import { Link } from "react-router-dom";

const CategoriesCart = ({ data }) => {
    return (
        <li className={Styles.CategoriesCart}>
            <Link to={`/categories/${data}`}>
                <img src={ShopBG} alt="shopping with bags" />
                <h3>{data}</h3>
            </Link>
        </li>
    );
};

export default CategoriesCart;
