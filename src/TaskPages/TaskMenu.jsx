import React from "react";
import { Link, Outlet } from "react-router-dom";

const TaskMenu = () => {
  return (
    <>
      <ol>
        <li>
          <Link to="todolist">TodoList</Link>
        </li>
        <li>
          <Link to="weatherapp">WeatherApp</Link>
        </li>
      </ol>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default TaskMenu;
