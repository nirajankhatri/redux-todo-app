import React, { useState } from "react";
import "./App.css";
import AddTodoModal from "./features/todo/AddTodoModal";
import Todo_List from "./features/todo/Todo_List";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {showModal && <AddTodoModal setShowModal={setShowModal} />}
      <Todo_List setShowModal={setShowModal} />
    </div>
  );
}

export default App;
