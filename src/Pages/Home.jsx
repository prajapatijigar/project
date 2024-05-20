import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove user data from local storage
    navigate('/parentlogin/logincompo');  // Navigate to the login page
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1>Welcome to the Home Page</h1>
      {/* Other content for the home page */}
    </div>
  );
};

export default Home;
