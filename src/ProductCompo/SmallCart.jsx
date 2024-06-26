import React from 'react';
import Styles from '../css/cart.module.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Cart = ({ img, title, rate, onHandler, id }) => {
  return (
    <div onClick={onHandler}>
      <Link to={`/product/${id}`} className={Styles.link}>
        <MDBCard className={Styles.mdbcard}>
          <MDBCardImage position='top' alt={title} src={img} />
          <MDBCardBody className={Styles['mdbcard-body']}>
            <MDBCardTitle>{title}</MDBCardTitle>
          </MDBCardBody>
          <MDBCardBody className={Styles.cartbody}>
            <MDBCardLink href='#' className={Styles.rate}>Rs.{rate}</MDBCardLink>
            <MDBBtn href='#' className={Styles.basketbtn}>Add To Basket</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  );
};

export default Cart;
