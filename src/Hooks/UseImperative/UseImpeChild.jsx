import React, { useRef, forwardRef, useImperativeHandle, useState, useEffect } from "react";

const UseImpeChild = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const arr = [1, 2, 3, 4, 5, 6];
  const [el, setEl] = useState();
  const [el2, setEl2] = useState();

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
        inputRef.current.style.background = "red";
      },
      shuffleMethod: () => {
        const shuffled = shuffle(arr); // Create a copy of arr to avoid mutation
        setEl(shuffled[0]);
        setEl2(shuffled[1]);
      },
    }),
    []
  );

  useEffect(() => {
    const shuffled = shuffle(arr); // Create a copy of arr to avoid mutation
    setEl(shuffled[0]);
    setEl2(shuffled[1]);
    // shuffled.shift()
    // shuffled.shift()
    props.onAddHandler(shuffled.slice(2,shuffled.length)); // Send the rest of the shuffled array
  }, [el]); // Add props.onAddHandler as dependency

  const shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      const j = Math.floor(Math.random() * array.length);

      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <>
      <input type="text" {...props} ref={inputRef} />
      <p>
        {el},{el2}
      </p>
    </>
  );
});

export default UseImpeChild;
