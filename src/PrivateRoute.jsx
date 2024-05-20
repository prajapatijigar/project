import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
     const isAuthenticated = JSON.parse(localStorage.getItem("user")) !== null;
    
      return  isAuthenticated ? children : <Navigate to="/parentlogin/logincompo"   /> 

  };

export default PrivateRoute;