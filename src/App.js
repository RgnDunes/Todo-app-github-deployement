import React, { useState } from "react";
import "./App.css";
import uniqid from "uniqid";

import InputGroup from "./InputGroup/InputGroup";
import TodoCard from "./TodoCard/TodoCard";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo Application - Netlify</h1>
        <InputGroup todoList={todoList} setTodoList={setTodoList} />
        <hr />

        {todoList.map((todoItem) => {
          return (
            <TodoCard
              key={uniqid()}
              title={todoItem.title}
              description={todoItem.description}
            />
          );
        })}
      </header>
    </div>
  );
};

export default App;
