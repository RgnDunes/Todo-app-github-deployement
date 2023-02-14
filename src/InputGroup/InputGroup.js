import React, { useState } from "react";

import "./InputGroup.css";

const InputGroup = ({ todoList, setTodoList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    name === "title" ? setTitle(value) : setDescription(value);
  };

  const handleClick = () => {
    const updatedTodoList = [...todoList];
    const newItem = { title: title, description: description };
    updatedTodoList.push(newItem);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <div className="field">
        <label>Title</label>
        <input name="title" type="text" value={title} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}> + Add Item</button>
    </div>
  );
};

export default InputGroup;
