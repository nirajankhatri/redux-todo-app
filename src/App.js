import React from "react";
import "./App.css";
import Todo_Add from "./features/todo/Add_Todo";
import Todo_List from "./features/todo/Todo_List";

function App() {
  return (
    <div className="App">
      <main>
        <Todo_Add />
        <Todo_List />
      </main>
    </div>
  );
}

export default App;
