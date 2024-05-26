import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <h1>Welcome to the Home Page</h1>
        {/* Other content for the home page */}
      </div>
    </>
  );
};

export default About;
