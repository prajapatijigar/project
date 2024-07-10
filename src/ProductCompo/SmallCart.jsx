import React, { useContext } from 'react';
import Styles from '../css/cart.module.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import Button from './AddBasketButton';

const Cart = ({ img, title, rate, onHandler, id,handleAddToCart}) => {
  const { addToCart } = useContext(CartContext);
   

  return (
    <div onClick={onHandler}>
      <Link className={Styles.link}>
        <MDBCard className={Styles.mdbcard}>
          <MDBCardImage position='top' alt={title} src={img} />
          <MDBCardBody className={Styles['mdbcard-body']}>
            <MDBCardTitle>{title}</MDBCardTitle>
          </MDBCardBody>
          <MDBCardBody className={Styles.cartbody}>
            <MDBCardLink href='#' className={Styles.rate}>Rs.{rate}</MDBCardLink>
            <Button onClick={handleAddToCart}>Add To Basket</Button>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  );
};

export default Cart;
