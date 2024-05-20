import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Registration = () => {
  const [inp, setInp] = useState({
    username: "",
    email: "",
    password: "", // Fixed typo here
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (inp.username ==="" || inp.email === "" || inp.password === "") {
         alert("Enter Your Data")
    }
    else{
        localStorage.setItem("user", JSON.stringify(inp));
        navigate("/parentlogin/logincompo");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={inp.username}
                    onChange={(event) =>
                      setInp({ ...inp, [event.target.name]: event.target.value })
                    }
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={inp.email}
                    onChange={(event) =>
                      setInp({ ...inp, [event.target.name]: event.target.value })
                    }
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={inp.password}
                    onChange={(event) =>
                      setInp({ ...inp, [event.target.name]: event.target.value })
                    }
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <h3>Already registered? <Link to="/parentlogin/logincompo">Login</Link></h3>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
