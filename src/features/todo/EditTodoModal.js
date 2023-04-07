// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../../app/redux/todoActions";
// import { createPortal } from "react-dom";
// import "../../style/components/_add_Todo.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

// const AddTodoModal = ({ setShowModal }) => {
//   const [todoTitle, setTodoTitle] = useState("");
//   const [todoContent, setTodoContent] = useState("");

//   const dispatch = useDispatch();

//   const canSave = Boolean(todoTitle) && Boolean(todoContent);

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     if (todoTitle.trim() !== "" && todoContent.trim() !== "") {
//       dispatch(addTodo(todoTitle, todoContent));
//       setTodoTitle("");
//       setTodoContent("");
//     }
//   };

//   return createPortal(
//     <>
//       <div className="portal-overlay" />
//       <div className="addTodoContainer">
//         <form onSubmit={formSubmitHandler} className="todoForm">
//           <div>
//             <input
//               type="text"
//               className="todoInput todoInput-title"
//               value={todoTitle}
//               onChange={(e) => setTodoTitle(e.target.value)}
//               placeholder="blink blink"
//             />
//           </div>
//           <div>
//             <textarea
//               type="text"
//               className="todoInput todoInput-content"
//               value={todoContent}
//               onChange={(e) => setTodoContent(e.target.value)}
//               placeholder="blink every 3 seconds"
//             />
//           </div>
//           <input
//             type="submit"
//             className="addBtn"
//             value="ADD"
//             disabled={!canSave}
//           />
//         </form>
//         <button className="close-modal-btn" onClick={() => setShowModal(false)}>
//           <FontAwesomeIcon icon={faSquareXmark} size="2xl" />
//         </button>
//       </div>
//     </>,
//     document.getElementById("root")
//   );
// };

// export default AddTodoModal;
