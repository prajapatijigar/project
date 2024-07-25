import React, { useContext, useState, useEffect } from "react";
import Styles from "../css/MenuList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";
import IncreDecre from "./IncreDecre";

const MenuList = ({ menuShow, onCloseHandle }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { counts, setCounts } = useContext(CartContext); // Object to manage counts of each item
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cartItems.reduce((acc, item) => acc + item.price * (counts[item.id] || 1), 0);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cartItems, counts]);

  const removeHandle = (index) => {
    const newData = cartItems.filter((item, idx) => idx !== index);
    setCartItems(newData);
  };

  return (
    <div className={`${Styles.menulistbg} ${menuShow ? Styles.show : Styles.hide}`}>
      <div className={Styles.countitem}>
        <div>
          <h3>Your Basket</h3>
          <span>Your Basket Has Got {cartItems.length} {cartItems.length > 1 ? 'Items' : 'Item'}</span>
        </div>
        <div className={Styles.closebtn} onClick={onCloseHandle}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <hr />
      <div className="overflow-auto">
        {cartItems.map((item, index) => (
          <div key={index}>
            <div className={Styles.menucartitem}>
              <div className="border mx-2 p-1">
                <img src={item.image} width={100} alt={item.title} className={Styles.cartItemImage} />
              </div>
              <div className="px-2">
                <h4>{item.title}</h4>
                <p>{`${item.price} X ${counts[item.id] || 1} = ${item.price * (counts[item.id] || 1)}`}</p>
                <div className="d-flex">
                  <IncreDecre
                    id={item.id} // Pass the id to the IncreDecre component
                  />
                </div>
              </div>
              <div className={Styles.minusbtn} onClick={() => removeHandle(index)}>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className={Styles.totalamout}>
        <div className="d-flex justify-content-between p-2">
          <span>Total: $</span>
          <span>{total.toFixed(2)}</span>
        </div>
        <div className={Styles.totalamoutbtn}>
          <button>Confirm the Basket</button>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
