import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./actions";
import { RiDeleteBin5Line, RiCheckboxCircleLine } from "react-icons/ri";
import { toggleComplete } from "./actions";
import "./App.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <ul className="list-group tache mx-auto text-light">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center text-white">
          <span className={todo.completed ? "completed-task" : ""}>
            {todo.task}
          </span>

         <span>
         <RiDeleteBin5Line
            className="fa fa-trash-o delete me-2"
            onClick={() => handleDelete(todo.id)}
          />
          <RiCheckboxCircleLine
            className={`complete-icon ${todo.completed ? "completed" : ""} me-2`}
            onClick={() => handleToggleComplete(todo.id)}
          />
         </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
