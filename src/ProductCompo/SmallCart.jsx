import React from 'react';
import Styles from '../css/cart.module.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBBtn
} from 'mdb-react-ui-kit';

const Cart = (props) => {
  return (
    <MDBCard className={Styles.mdbcard} onClick={() => { console.log("called");}}>
      <MDBCardImage position='top' alt={props.title} src={props.img} />
      <MDBCardBody className={Styles['mdbcard-body']}>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        {/* <MDBCardText className={Styles['mdbcard-text']}>{props.content}</MDBCardText> */}
      </MDBCardBody>
      <MDBCardBody className={Styles.cartbody}>
        <MDBCardLink href='#' className={Styles.rate}>Rs.{props.rate}</MDBCardLink>
        <MDBBtn href='#' className={Styles.basketbtn}>Add To Basket</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Cart;
