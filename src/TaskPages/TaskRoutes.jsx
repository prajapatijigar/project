import React from 'react';
import { useRoutes } from 'react-router-dom';
import TaskMenu from './TaskMenu';
import TodoList from "./01TodoList";
import WeatherApp from "./02WeatherApp";


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
            ]
        }
     ])

    return  routes;
};

export default TaskRoutes;