import React from 'react';
import { useRoutes } from 'react-router-dom';
import HooksList from "./HooksList";
import MainContext from './UseContext/MainContext';
import UseImperative from './UseImperative/UseImperative';

const HooksRoutes = () => {
     
    const HookRoutes = useRoutes([
        {
            path: "/",
            element: <HooksList/>,
            children : [
                {
                    path : "usecontext",
                    element: <><MainContext/></>
                },
                {
                    path : "useimperative",
                    element: <><UseImperative/></>
                }
            ]

        }
    ])

    return HookRoutes;
};

export default HooksRoutes;