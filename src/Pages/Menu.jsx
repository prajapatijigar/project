import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col">
                        <h3><Link to="task">Task</Link></h3>
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

export default Menu;