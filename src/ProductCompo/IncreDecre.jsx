import React, { useContext } from "react";
import Styles from "../css/IncreDecre.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";

const IncreDecre = ({ id }) => {
  const { counts, setCounts } = useContext(CartContext);

  const handleIncrement = () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

  const handleDecrement = () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1),
    }));
  };

  return (
    <div className={Styles.plusminusicon}>
      <FontAwesomeIcon onClick={handleDecrement} icon={faMinus} />
      {counts[id] || 1}
      <FontAwesomeIcon onClick={handleIncrement} icon={faPlus} />
    </div>
  );
};

export default IncreDecre;
