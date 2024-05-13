import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';

const UseImpeChild = forwardRef((props, ref) => {
    const [ele1,setEle1] = useState()
    const [ele2,setEle2] = useState()
    const inputRef = useRef(null);
    const arr = [1, 2, 3, 4, 5, 6];

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
            inputRef.current.style.background = 'red';
        },
        shuffleArr: () => {
            const shuffledArr = [];
            for(let i=0; i<=arr.length -1; i++){
                const j = Math.floor(Math.random() * arr.length)
                const temp = arr[i]
                  arr [i] = arr[j]
                  arr[j] = temp
            }
            setEle1(arr.shift())
            setEle2(arr.shift())
            
            //  console.log(arr);
             
             
             

            // while (arr.length > 0) {
            //     const randomIndex = Math.floor(Math.random() * arr.length);
            //     shuffledArr.push(arr[randomIndex]);
            //     arr.splice(randomIndex, 1);
            // }
            // console.log(shuffledArr);
        },
    }), []);

    return (
        <>
        <input type="text" {...props} ref={inputRef} />
        <p>{ele1},{ele2}</p>
        </>
    );

})

export default UseImpeChild;
