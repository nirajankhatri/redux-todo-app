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
} from "../../app/redux/todoActions";

import "../../style/components/_todo_List.scss";
import { Link, useNavigate } from "react-router-dom";

const Todo_List = () => {
  const todoArray = useSelector((state) => state.todos.todoList);
  const historyArray = useSelector((state) => state.todos.activityHistory);

  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [filter, setFilter] = useState("");
  const [renderedTodoArray, setRenderedTodoArray] = useState(todoArray);
  const filterOptions = [
    { label: "ALL", value: "" },
    { label: "COMPLETE", value: 1 },
    { label: "INCOMPLETE", value: 0 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTodoHandler = (id, title) => {
    dispatch(removeTodo(id, title));
  };

  const todoCheckboxHandler = (e, id, title) => {
    document.getElementById(id).classList.toggle("complete");
    e.target.checked
      ? dispatch(completeTodo(id, title))
      : dispatch(undoCompleteTodo(id, title));
  };

  const redoHandler = (id, title) => {
    dispatch(redo(id, title));
  };

  const undoHandler = (id, title) => {
    dispatch(undo(id, title));
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

  const filterHandler = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  useEffect(() => {
    if (historyArray.length > 0) {
      localStorage.setItem("todoLog", JSON.stringify(historyArray));
    }

    setTotalTasks(todoArray.length);
    setCompletedTasks(todoArray.filter((todo) => todo.present.complete).length);
    setRenderedTodoArray(todoArray);
  }, [todoArray, historyArray]);

  useEffect(() => {
    if (filter !== "") {
      setRenderedTodoArray(
        todoArray.filter((todo) => +todo.present.complete === +filter)
      );
    } else {
      setRenderedTodoArray(todoArray);
    }
  }, [filter, todoArray]);

  const todoList = renderedTodoArray.map((todo) => (
    <div className="taskCard" key={todo.id}>
      <div className="cardInfoContainer">
        <h4
          className={`task__title ${todo.present.complete ? "complete" : ""}`}
        >
          {todo.present.title}
        </h4>
        <textarea
          className={`task__content ${todo.present.complete ? "complete" : ""}`}
          id={todo.id}
          defaultValue={todo.present.content}
          readOnly
        ></textarea>
      </div>
      <div className="dateContainer">
        <p>
          Created: <span>{todo.createdDate}</span>
        </p>
        {todo.updatedDate !== "" ? (
          <p>
            Updated: <span>{todo.updatedDate}</span>
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="itemBtns">
        <div className="btnContainer checkboxContainer">
          <label htmlFor={todo.id}>Complete</label>
          <input
            id={todo.id}
            className="itemCheck"
            type="checkbox"
            onChange={(e) => todoCheckboxHandler(e, todo.id, todo.present.title)}
            checked={todo.present.complete ? true : false}
          />
        </div>
        <div className="btnContainer editContainer">
          <button
            className="btn"
            onClick={() => redoHandler(todo.id, todo.present.title)}
            disabled={todo.future.length < 1}
          >
            <FontAwesomeIcon icon={faRotateRight} size="xl" />
          </button>

          <button
            className="btn"
            onClick={() => undoHandler(todo.id, todo.present.title)}
            disabled={todo.past.length < 1}
          >
            <FontAwesomeIcon icon={faRotateLeft} size="xl" />
          </button>

          <button
            className="btn"
            onClick={() => navigate(`/todo/edit/${todo.id}`)}
          >
            <FontAwesomeIcon icon={faPenToSquare} size="xl" />
          </button>

          <button
            className="btn"
            onClick={() => deleteTodoHandler(todo.id, todo.present.title)}
          >
            <FontAwesomeIcon
              className="DeleteIcon"
              icon={faTrashAlt}
              cursor="pointer"
              size="xl"
            />
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

        <select
          className="filter"
          name="filter"
          onChange={filterHandler}
          value={filter}
        >
          {filterOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="showModalBtn" onClick={() => navigate(`/todo/add`)}>
          Add Todo
        </button>
      </div>
      <div className="taskCards">{todoList}</div>
    </div>
  );
};

export default Todo_List;
