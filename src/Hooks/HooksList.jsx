import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HooksList = () => {
    return (
        <>
             <ol>
                <li><Link to = "usecontext">UseContext</Link></li>
             </ol>
             <div>
                <Outlet></Outlet>
             </div>
        </>
    );
};

export default HooksList;