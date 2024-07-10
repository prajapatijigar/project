// src/components/AddBasketButton.js
import React, { useContext } from 'react';
import { CartContext } from '../ProductCompo/CartContext';
import { MDBBtn } from 'mdb-react-ui-kit';
import Styles from "../css/DetailsCard.module.css";

const Button = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(product);
  };

  return (
    < >
      <MDBBtn onClick={handleClick} href='#' className={Styles.basketbtn}>Add to Basket</MDBBtn>
    </>
  );
};

export default Button;
