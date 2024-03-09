import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col">
                        <h3><Link to="hooks">Hooks</Link></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;