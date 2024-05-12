import React, { useState } from "react";

const Increment = () => {
  const [state, setState] = useState(0);
  const [data,setData] = useState({})

  return (
    <>
     <div className="row bg-primary py-5">
     <div className="text-center">
     <div className="text-light">{state}</div>
      <div>
        <button className="m-3 text-light bg-dark" onClick={() => {setState(state + 1)}}>Increment</button>
        <button className="m-3 text-light bg-dark" onClick={() => {setState(state - 1)}}>Decrement</button>
      </div>
      <button className="text-light bg-dark" onClick={() => {setState("0")}}>Reset</button>
     </div>
     </div>

     <div>
       {JSON.stringify(data)}
      <input type="text" placeholder="Enter Your Username" name="username"  onChange={(e) => {setData({...data,[e.target.name]:e.target.value})}} />
      <input type="text"  placeholder="Enter Your Password" name="password" onChange={(e) => {setData({...data, [e.target.name]: e.target.value})}}/>
     </div>

    </>
  );
};

export default Increment;