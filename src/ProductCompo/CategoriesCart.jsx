import React from 'react';
import Styles from '../css/categories.module.css';
import ShopBG from '../Images/shopBG.jpg';

const CategoriesCart = () => {
    return (
        <li className={Styles.CategoriesCart}>
            <img src={ShopBG} alt="shopping with bags" />
            <h3>Heading</h3>
        </li>
    );
};

export default CategoriesCart;
