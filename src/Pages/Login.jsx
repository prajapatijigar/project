import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [state, setState] = useState(true);
  const [formData,setFormData] = useState({username: '',password: ''})

   const changeData = async (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})

   }
   
   const loginHandler = async (e) => {
    if (!formData.username || !formData.password) {
      alert("Please fill in both username and password fields.");
  } else{
      console.log(formData);
         await fetch(`http://localhost:3005/users`,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }).then(res => {
          return res.json()
        }).then((data) => {
           console.log(data);
           setFormData({});

        })

     }
   }
    
   const signInForm = () => {
      console.log(formData);
   }

  return (
    <>
      <div className="body-auth">
        <div
          className={`${state ? "container-auth" : "container-auth log-in"}`}
        >
          <Link className="nav-link position-relative z-index" to="/">
            <i className="fa fa-home text-white p-1 d-block position-absolute"></i>
          </Link>
          <div className="box"></div>
          <div className="container-auth-forms">
            <div className="container-auth-info">
              <div className="info-item">
                <div className="table">
                  <div className="table-cell">
                    <p>Have an account?</p>
                    <div className="btn-auth" onClick={() => setState(true)}>
                      Log in
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <div className="table">
                  <div className="table-cell">
                    <p>Don't have an account?</p>
                    {/* {status} */}
                    {/* {JSON.stringify(status)} */}
                    <div className="btn-auth" onClick={() => setState(false)}>
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-auth-form">
              <div className="form-item log-in">
                <div className="table">
                  <div className="table-cell">
                    <p>{JSON.stringify(formData)}</p>
                    <input name="username" onChange={changeData} placeholder="Username" type="text" />
                    <input name="password" onChange={changeData} placeholder="Password" type="password" />
                    {/* <input name="password" onChange={(event) => { setFormData((data) => ({ ...data.formData, [event.target.name]: event.target.value })) }} placeholder="Password" type="Password" /> */}
                    <div className="btn-auth" onClick={loginHandler}>Log in</div>
                  </div>
                </div>
              </div>
              <div className="form-item sign-up">
                <div className="table">
                  <div className="table-cell">
                    {/* <input name="email" onChange={ (event)=>{  setFormData((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}})) }} placeholder="Email" type="text" /> */}
                    <input name="email" placeholder="Email" type="text" />
                    <input
                      name="fullName"
                      placeholder="Full Name"
                      type="text"
                    />
                    <input name="username" placeholder="Username" type="text" />
                    <input
                      name="password"
                      placeholder="Password"
                      type="Password"
                    />
                    <div className="btn-auth" onClick={signInForm}>Sign up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
