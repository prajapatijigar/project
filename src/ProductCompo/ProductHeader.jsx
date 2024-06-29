  import React, { useState } from "react";
  import Styles from "./../css/ProductHeader.module.css";
  import Styles2 from "../css/categories.module.css"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
  import { Link } from "react-router-dom";
  import Categories from "./Categories";
  import MenuList from "./MenuList";

  const ProductHeader = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [isShowList,setIsShowList] = useState(false)

    const handleMouseEnter = () => {
      setShowCategories(true);
    };

    const handleMouseLeave = () => {
      setShowCategories(false);
    };

     const onListHandle = () => {
      setIsShowList(true)
     }

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
                  <div className={`${Styles2.categoriesDropdown} ${showCategories ? Styles2.show : ""}`}>
                       <Categories/>
                  </div>
                </li>
                <li className={Styles.ShopIcon} onClick={onListHandle}>
                  <Link to="#">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Link>
                </li>
                <div className={`${isShowList ? Styles.listmenushow : Styles.listmenuhide}`}>
                 <MenuList/> 
                </div>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  };

  export default ProductHeader;
