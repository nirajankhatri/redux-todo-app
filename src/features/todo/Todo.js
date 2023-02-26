import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./todoSlicer";
import uuid from "react-uuid";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");

  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const todoList = <ul>{todos.map((todo) => <li key={uuid()}>{todo}</li>)}</ul>;

  const inputChangeHandler = (e) => setTodoItem(e.target.value);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoItem));
    setTodoItem("");
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={todoItem} onChange={inputChangeHandler} />
        <input type="submit" className="addBtn" value="ADD" />
      </form>
      {todoList}
    </div>
  );
};

export default Todo;
