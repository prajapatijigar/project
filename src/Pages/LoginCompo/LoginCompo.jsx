import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginCompo = () => {
  const navigate = useNavigate();
  const [inp,setInp] = useState({email:"",password:""}) 

  const handlerLogin = (e) => {
    e.preventDefault();
    const loggedusrData = JSON.parse(localStorage.getItem("user"))
    if(loggedusrData && inp.email === loggedusrData.email && inp.password === loggedusrData.password){
       
      navigate("/");

  }else{
    alert("Invalid email or password. Please try again.");

  }
};    

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handlerLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                       name="email"
                       onChange={(event) => setInp({...inp,[event.target.name]: event.target.value}) }
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={(event) => setInp({...inp,[event.target.name]: event.target.value}) }
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                       required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <h5>
                      Click here to <Link to="/parentlogin/register">register</Link>
                    </h5>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <small>&copy; 2024 Your Company</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default LoginCompo;
