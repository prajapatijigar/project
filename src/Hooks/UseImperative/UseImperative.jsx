import React, { useRef, useState } from 'react';
import UseImpeChild from './UseImpeChild';

const UseImperative = () => {
  const [element, setElement] = useState();
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  const suffleClick = () => {
    ref.current.shuffleMethod();
  };

  const parentHandler = async (data) => {
    console.log(data);
    await setElement(data);
  };

  return (
    <>
       {/* {(element && element.length)? */}
          <table>
          <thead>
              <tr>
                  <th>col-1</th>
                  <th>col-2</th>
              </tr>
          </thead>
          <tr>
              <td>{element && element[0]}</td>
              <td>{element && element[1]}</td>
          </tr>
          <tr>
          <td>{element && element[2]}</td>
          <td>{element && element[3]}</td>
          </tr>
      </table>
       {/* : "no data"} */}
       
      <UseImpeChild onAddHandler={parentHandler} ref={ref} />
      <button onClick={handleClick}>click</button>
      <button onClick={suffleClick}>shuffle click</button>
       

    </>
  );
};

export default UseImperative;
