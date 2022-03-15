import React from "react";

// import "./../App.scss";

function Todo({ todo, index, removeTodo, handleUpdate }) {
  if (!(todo && todo.id)) return null;
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        textDecorationColor: todo.isCompleted ? "yellow" : "",
      }}
    >
      {todo.text}

      <div className="todoButton">
        <button onClick={() => handleUpdate(todo, index)}>Edit</button>
        <button onClick={() => removeTodo(index, todo.id)}>Delete x</button>
      </div>
    </div>
  );
}
export default Todo;
