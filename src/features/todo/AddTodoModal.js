import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, edit } from "../../app/redux/todoActions";
import { createPortal } from "react-dom";
import "../../style/components/_add_Todo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const AddTodoModal = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const todos = useSelector((state) => state.todos);

  if (id) {
    console.log(id);
    console.log(todos);

    if (!editing) {
      const todo = todos.find((todo) => todo.id == id);
      console.log(todo);
      setTodoTitle(todo.present.title);
      setTodoContent(todo.present.content);
      setEditing(true);
    }
  }

  const canSave = Boolean(todoTitle) && Boolean(todoContent);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (todoTitle.trim() !== "" && todoContent.trim() !== "") {
      if (id) {
        dispatch(edit(id, todoTitle, todoContent));
        setTodoTitle("");
        setTodoContent("");
        navigate("/");
      } else {
        dispatch(addTodo(todoTitle, todoContent));
        setTodoTitle("");
        setTodoContent("");
      }
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
              className="todoInput todoInput-title"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              placeholder="blink blink"
            />
          </div>
          <div>
            <textarea
              type="text"
              className="todoInput todoInput-content"
              value={todoContent}
              onChange={(e) => setTodoContent(e.target.value)}
              placeholder="blink every 3 seconds"
            />
          </div>
          <input
            type="submit"
            className="addBtn"
            value={id ? "UPDATE" : "ADD"}
            disabled={!canSave}
          />
        </form>
        <button className="close-modal-btn" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faSquareXmark} size="2xl" />
        </button>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default AddTodoModal;
