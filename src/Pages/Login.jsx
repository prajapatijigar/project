import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [state, setState] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
  });
  const [error, setError] = useState(null);
  const resetFormData = () => {
    setFormData({
      username: "",
      password: "",
      email: "",
      fullName: "",
    });
    setError(null);
  };

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signUpForm = async (e) => {
    e.preventDefault();
    // console.log("formData", formData);
     if ( ! formData.password || !formData.username || !formData.email || !formData.fullName) {
           alert("Please Enter Your All Data")
     }else{

    try {
      const response = await axios.get(
        "http://localhost:3005/users"
      );

      const users = response.data;
      const userExists = users.some(user => user.email === formData.email || user.username === formData.username);
       if (userExists) {
        alert("User with this email or password already exists");
          return;
       }

      const lastId = users.length ? users[users.length - 1].id : 0;
      const newUser = {
        ...formData,
        id: (parseInt(lastId) + 1).toString(),"role_id" : 2   
      };

       await axios.post("http://localhost:3005/users", newUser);
      console.log("User added successfully:", newUser);
      resetFormData()
      setState(true)
    } catch (error) {
      console.log(error);
    }
    
  }
   
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3005/users?username=${formData.username}&password=${formData.password}`);
       if (!formData.password && !formData.username) {
            alert("enter your data")
            return
       }
      const users = response.data;
      // const user = users.find(
      //   (user) =>
      //     user.username === formData.username &&
      //     user.password === formData.password
      // );
      const user = users[0];

      if (users.length>0 && (user.username === formData.username && user.password === formData.password)) {
          // console.log("Login successful:", user);
                 console.log(user);

        setCookie('user_role', user.role_id, { path: '/' });
        setCookie('user_id', user.id, { path: '/' });
        setFormData({ username: "", password: "" });
        setError(null); // Clear any previous errors
        if(user.role_id === 1){
             navigate("/services")
        }else if(user.role_id === 2){
            navigate("/about")
        }
      } else {
        setError("Invalid username or password");
      }
    
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

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
                    <input
                      name="username"
                      value={formData.username}
                      onChange={changeData}
                      placeholder="Username"
                      type="text"
                    />
                    <input
                      name="password"
                      value={formData.password}
                      onChange={changeData}
                      placeholder="Password"
                      type="password"
                    />
                    {error && <p className="error">{error}</p>}
                    <div className="btn-auth" onClick={loginHandler}>
                      Log in
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-item sign-up">
                <div className="table">
                  <div className="table-cell">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={changeData}
                      placeholder="Email"
                      type="text"
                       required
                    />
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={changeData}
                      placeholder="FullName"
                      type="text"
                      required
                    />
                    <input
                      name="username"
                      value={formData.username}
                      onChange={changeData}
                      placeholder="Username"
                      type="text"
                      required
                    />
                    <input
                      name="password"
                      value={formData.password}
                      onChange={changeData}
                      placeholder="Password"
                      type="password"
                      required
                    />
                    <div className="btn-auth" onClick={signUpForm}>
                      Sign up
                    </div>
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
