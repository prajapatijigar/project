import React from "react";
import Styles from "../css/MenuList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuList = ({ menuShow, onCloseHandle }) => {
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
    </div>
  );
};

export default MenuList;
