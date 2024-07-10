// src/components/ProductHeader.js
import React, { useState, useEffect, useRef, useContext } from "react";
import Styles from "./../css/ProductHeader.module.css";
import Styles2 from "../css/categories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import MenuList from "./MenuList";
import { CartContext } from '../ProductCompo/CartContext';

const ProductHeader = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const menuRef = useRef(null);
  const { cartItems } = useContext(CartContext);

   console.log("cartitems",cartItems);

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  const onListHandle = () => {
    setMenuShow(true);
    console.log("called");
    document.body.style.backgroundColor = "#00000024";
  };

  const onCloseHandle = () => {
    setMenuShow(false);
    document.body.style.backgroundColor = "white";
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuShow(false);
      document.body.style.backgroundColor = "white";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={Styles.sansserif}>
      <header className={Styles.ProductHeader}>
        <div className={Styles.navContainer}>
          <Link to="/product">
            <div className={Styles.productlogo}>
              <h2>online-store</h2>
            </div>
          </Link>
          <div className={Styles.shopping}>
            <ul>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="#" className={Styles.categoriesLink}>
                  Categories
                </Link>
                <div
                  className={`${Styles2.categoriesDropdown} ${
                    showCategories ? Styles2.show : ""
                  }`}
                >
                  <Categories />
                </div>
              </li>
              <li className={Styles.ShopIcon} onClick={onListHandle}>
                <Link to="#">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <div className={Styles.itemcountnum}>{cartItems.length}</div>
              </li>
              <div ref={menuRef}>
                <MenuList menuShow={menuShow} onCloseHandle={onCloseHandle} />
              </div>
            </ul>
          </div>
        </div>
      </header> 
    </div>
  );
};

export default ProductHeader;
