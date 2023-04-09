import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTodoModal from "./features/todo/AddTodoModal";
import Log from "./features/todo/Log";
import Todo_List from "./features/todo/Todo_List";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Todo_List setShowModal={setShowModal} />} />
          <Route path="/todo/add" element={<AddTodoModal />} />
          <Route path="/todo/edit/:id" element={<AddTodoModal />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
