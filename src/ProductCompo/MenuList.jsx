import React, { useContext } from "react";
import Styles from "../css/MenuList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";

const MenuList = ({ menuShow, onCloseHandle }) => {
  const { cartItems } = useContext(CartContext);
   console.log("csrt",cartItems);
    
  return (
    <div
      className={`${Styles.menulistbg} ${menuShow ? Styles.show : Styles.hide}`}
    >
      <div className={Styles.countitem}>
        <div>
          <h3>Your Basket</h3>
          <span>Your Basket Has Got 0 Items</span>
        </div>
        <div className={Styles.closebtn} onClick={onCloseHandle}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
        <hr />
      <div>
      {cartItems.map((item, index) => (
        <div>
           <div key={index} className={`${Styles.cartItem} d-flex`}>
            <div className="border p-1">
              <img src={item.image} width={100} alt={item.title} className={Styles.cartItemImage} />
           </div>
           <div className={`${Styles.cartItemDetails} px-2`}>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
           </div>
           </div>
          <hr />
        </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
