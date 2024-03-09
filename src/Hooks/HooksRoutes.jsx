import React from 'react';
import { useRoutes } from 'react-router-dom';
import HooksList from "./HooksList";
import MainContext from './UseContext/MainContext';

const HooksRoutes = () => {
     
    const HookRoutes = useRoutes([
        {
            path: "/",
            element: <HooksList/>,
            children : [
                {
                    path : "usecontext",
                    element: <><MainContext/></>
                }
            ]

        }
    ])

    return HookRoutes;
};

export default HooksRoutes;