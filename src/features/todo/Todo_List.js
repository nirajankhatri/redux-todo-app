import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRotateLeft,
  faRotateRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  removeTodo,
  completeTodo,
  undoCompleteTodo,
  redo,
  undo,
  edit,
} from "../../app/redux/todoActions";

import "../../style/components/_todo_List.scss";
import { useNavigate } from "react-router-dom";

const Todo_List = () => {
  const todoArray = useSelector((state) => state.todos);

  const [editingTask, setEditingTask] = useState(null);

  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const todoCheckboxHandler = (e, id) => {
    document.getElementById(id).classList.toggle("complete");
    e.target.checked
      ? dispatch(completeTodo(id))
      : dispatch(undoCompleteTodo(id));
  };

  const redoHandler = (id) => {
    dispatch(redo(id));
  };

  const undoHandler = (id) => {
    dispatch(undo(id));
  };

  // const editHandler = (id, task) => {
  //   setIsEditing(id);
  //   setEditingTask(task);
  // };

  // const editTaskHandler = (task) => {
  //   setEditingTask(task);
  // };

  // const editSaveHandler = (id, task) => {
  //   dispatch(edit(id, task));
  // };

  useEffect(() => {
    setTotalTasks(todoArray.length);
    setCompletedTasks(todoArray.filter((todo) => todo.present.complete).length);
  }, [todoArray]);

  const todoList = todoArray.map((todo) => (
    <div className="taskCard" key={todo.id}>
      <h4 className={`task__title ${todo.present.complete ? "complete" : ""}`}>
        {todo.present.title}
      </h4>
      <p
        className={`task__content ${todo.present.complete ? "complete" : ""}`}
        id={todo.id}
      >
        {todo.present.content}
      </p>

      <div className="itemBtns">
        <div className="btnContainer checkboxContainer">
          <label htmlFor={todo.id}>Complete</label>
          <input
            id={todo.id}
            className="itemCheck"
            type="checkbox"
            onChange={(e) => todoCheckboxHandler(e, todo.id)}
            checked={todo.present.complete ? true : false}
          />
        </div>
        <div className="btnContainer deleteIconContainer">
          <label htmlFor="DeleteIcon">Delete</label>
          <FontAwesomeIcon
            className="DeleteIcon"
            icon={faTrashAlt}
            cursor="pointer"
            size="xl"
            onClick={() => deleteTodoHandler(todo.id)}
          />
        </div>
        <div className="btnContainer editContainer">
          <button
            className="btn"
            onClick={() => redoHandler(todo.id)}
            disabled={todo.future.length < 1}
          >
            <FontAwesomeIcon icon={faRotateRight} size="2xl" />
          </button>

          <button
            className="btn"
            onClick={() => undoHandler(todo.id)}
            disabled={todo.past.length < 1}
          >
            <FontAwesomeIcon icon={faRotateLeft} size="2xl" />
          </button>

          <button
            className="btn"
            onClick={() => navigate(`/todo/edit/${todo.id}`)}
          >
            <FontAwesomeIcon icon={faPenToSquare} size="2xl" />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="listContainer">
      <div className="header">
        <div className="taskInfoContainer">
          <p>
            Total Tasks: <span>{totalTasks}</span>
          </p>
          <p>
            Completed Tasks: <span>{completedTasks}</span>
          </p>
        </div>
        <button className="showModalBtn" onClick={() => navigate(`/todo/add`)}>
          Add Todo
        </button>
      </div>
      <div className="taskCards">{todoList}</div>
    </div>
  );
};

export default Todo_List;
