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
        <li>
          <Link to="renderlist">Render List</Link>
        </li>
        <li>
          <Link to="incredement">Increment and Decrement Button</Link>
        </li>
        <li>
          <Link to="postmethod">Post Method Using axios</Link>
        </li>
      </ol>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default TaskMenu;
