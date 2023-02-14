import React from "react";

import "./TodoCard.css";

const TodoCard = ({ title, description }) => {
  return (
    <div className="classContainer">
      <div className="cardHeading">{title}</div>
      <div className="cardBody">{description}</div>
    </div>
  );
};

export default TodoCard;
