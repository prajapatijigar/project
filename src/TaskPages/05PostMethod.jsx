import axios from "axios";
import React, { useState } from "react";

const PostMethod = () => {
  const data = { fname: "", lname: "" };
  const [state, setState] = useState(data);
  const [store, setStore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
     setIsLoading(true)
    try {
         const response =  await axios.post(`https://jsonplaceholder.typicode.com/users`, state)
        setStore(JSON.stringify(response.data));
    } catch (error) {
         console.log("Error fetching data",error);  
    }
     setIsLoading(false)

  };

  return (
    <>
      <p>first name : {state.fname}</p>
      <p>last name : {state.lname}</p>
      <label className="py-3">First name</label>
      <input
        type="text"
        name="fname"
        value={state.fname}
        onChange={onChangeHandle}
      />
      <br />
      <label className="py-3">Last name</label>
      <input
        type="text"
        name="lname"
        value={state.lname}
        onChange={onChangeHandle}
      />
       <p>{isLoading ? 'Loading...': ''}</p>
       <br />
      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
      
    {store && (
        <div>
             <h2>response data</h2>
             <p>{store}</p>
        </div>
    ) 
    }
    </>
  );
};

export default PostMethod;

