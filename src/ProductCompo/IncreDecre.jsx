import React, { useState } from "react";
import Styles from "../css/IncreDecre.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const IncreDecre = () => {
  const [state,setState] = useState(0) 

  const decrement = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  const increment = () => {
    setState(state + 1);
  };
    
    
  return (
    <>
      <div className={Styles.plusminusicon}>
        <FontAwesomeIcon onClick={decrement} icon={faMinus} />
         {state}
        <FontAwesomeIcon onClick={increment} icon={faPlus} />
      </div>
    </>
  );
};

export default IncreDecre;
