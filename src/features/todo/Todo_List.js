import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { removeTodo, completeTodo, undoCompleteTodo } from "./todoSlicer";

import "../../style/components/_todo_List.scss";

const Todo_List = () => {
  const todos = useSelector((state) => state.todo.todoList);

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const todoCheckboxHandler = (e, id) => {
    document.getElementById(id).classList.toggle("complete");
    e.target.checked
      ? dispatch(completeTodo(id))
      : dispatch(undoCompleteTodo(id));
  };

  const todoList = todos.map((todo) => (
    <li className="listItem" key={todo.id}>
      <span className="listItem__task" id={todo.id}>
        {todo.task}
      </span>
      <div className="itemBtns">
        <input
        className="itemCheck"
          type="checkbox"
          onClick={(e) => todoCheckboxHandler(e, todo.id)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          color="gray"
          cursor="pointer"
          onClick={() => deleteTodoHandler(todo.id)}
        />
      </div>
    </li>
  ));

  return (
    <div className="listContainer">
      <ul className="list">{todoList}</ul>
    </div>
  );
};

export default Todo_List;
