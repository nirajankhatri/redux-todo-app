import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlicer";
import "../../style/components/_add_Todo.scss";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setTodoItem(e.target.value);
    document.getElementsByClassName("todoInput")[0].classList.remove("error");
    document.getElementsByClassName("errorMessage")[0].classList.remove("errorMessage--show");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (todoItem.trim() !== "") {
      dispatch(addTodo(todoItem));
      setTodoItem("");
    } else {
      document.getElementsByClassName("todoInput")[0].classList.add("error");
      document.getElementsByClassName("errorMessage")[0].classList.add("errorMessage--show");
    }
  };

  return (
    <div className="addTodoContainer">
      <h1 className="addTodoTitle">Add a new Todo</h1>
      <form onSubmit={formSubmitHandler} className="todoForm">
        <div>
          <input
            type="text"
            className="todoInput"
            value={todoItem}
            onChange={inputChangeHandler}
            placeholder="blink"
          />
          <p className="errorMessage">Please enter a task</p>
        </div>
        <input type="submit" className="addBtn" value="ADD" />
      </form>
    </div>
  );
};

export default Todo;
