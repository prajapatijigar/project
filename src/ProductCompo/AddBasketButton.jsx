import React from 'react';
import Styles from "../css/DetailsCard.module.css"; 
import {
    MDBBtn
  } from 'mdb-react-ui-kit';
  

const Button = ({children}) => {
    return (
        <>
            <div>
            <MDBBtn href='#' className={Styles.basketbtn}>{children}</MDBBtn>
            </div>
        </>
    );
};

export default Button;