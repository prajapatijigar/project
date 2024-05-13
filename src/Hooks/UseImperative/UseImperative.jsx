import React, { useRef } from 'react';
import UseImpeChild from './UseImpeChild';

const UseImperative = () => {
     const ref = useRef(null)
      
     const handleClick = () => {
          ref.current.focus()
     }
     const suffleClick = () => {
          ref.current.shuffleArr()
     }
    return (
        <>
          <UseImpeChild ref={ref}/>
          <button onClick={handleClick}>click</button>
          <button onClick={suffleClick}>suffleclick</button>
        </>
    );
};

export default UseImperative;   