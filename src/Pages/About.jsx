import React from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user_role', 'user_id']);
    
    const handleLogout = () => {
        removeCookie('user_role', { path: '/' });
        removeCookie('user_id', { path: '/' });
        navigate("/login");
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

export default About;
