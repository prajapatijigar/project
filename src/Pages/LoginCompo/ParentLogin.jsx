import React from "react";
import { Link, Outlet } from "react-router-dom";


const ParentLogin = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <h3>
              <Link to="/">Home</Link>
            </h3>
          </div>
          <div className="col-1">
            <h3>
              <Link to="logincompo">Login</Link>
            </h3>
          </div>
          <div className="col-1">
            <h3>
              <Link to="register">Register</Link>
            </h3>
          </div>
        </div>
        <Outlet /> {/* Nested routes will be rendered here */}
      </div>
    </>
  );
};

export default ParentLogin;
