import React from 'react';
import { useRoutes } from 'react-router-dom';
import TaskMenu from './TaskMenu';
import TodoList from "./01TodoList";
import WeatherApp from "./02WeatherApp";
import RenderList from './03RenderList';
import Increment from "./04IncrementDecrement";
import PostMethod from "./05PostMethod";


const TaskRoutes = () => {
     const routes = useRoutes([
        {
            path: "/",
            element : <TaskMenu/>,
            children : [
                {
                    path: "todolist",
                    element : <TodoList/>
                },
                {
                    path: "weatherapp",
                    element: <WeatherApp/>
                },
                {
                    path: "renderlist",
                    element: <RenderList/>
                },
                {
                    path: "incredement",
                    element: <Increment/>
                },
                ,
                {
                    path: "postmethod",
                    element: <PostMethod/>
                }
            ]
        }
     ])

    return  routes;
};

export default TaskRoutes;