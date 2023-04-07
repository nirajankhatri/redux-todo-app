import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/redux/todoActions";
import { createPortal } from "react-dom";
import "../../style/components/_add_Todo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const AddTodoModal = ({ setShowModal }) => {
  //   const modalStyles = {
  //     position: "fixed",
  //     backgroundColor: "blue",
  //     zIndex: "1000",
  //     padding: "20px",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     textAlign: "center",
  //   };

  //   const overlayStyles = {
  //     position: "fixed",
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     backgroundColor: "rgba(123, 123, 123, 0.7)",
  //     zIndex: "1000",
  //   };

  const [todoItem, setTodoItem] = useState("");

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setTodoItem(e.target.value);
    document.getElementsByClassName("todoInput")[0].classList.remove("error");
    document
      .getElementsByClassName("errorMessage")[0]
      .classList.remove("errorMessage--show");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (todoItem.trim() !== "") {
      dispatch(addTodo(todoItem));
      setTodoItem("");
    } else {
      document.getElementsByClassName("todoInput")[0].classList.add("error");
      document
        .getElementsByClassName("errorMessage")[0]
        .classList.add("errorMessage--show");
    }
  };

  return createPortal(
    <>
      <div className="portal-overlay" />
      <div className="addTodoContainer">
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
        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
          <FontAwesomeIcon icon={faSquareXmark} size="2xl" />
        </button>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default AddTodoModal;
