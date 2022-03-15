import React, { useState } from "react";
import useDataRequest from "../hooks/useDataRequest";

function AddForm() {
  const [data, setData] = useState("");
  let [isBlocking, setIsBlocking] = useState(false);
  console.log(isBlocking);

  const { addTodo } = useDataRequest();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data) {
      alert("Type something now bitch!!!!");
      return;
    }
    addTodo(data);
    setData("");
    setIsBlocking(false);
  };

  const handleInput = (event) => {
    setData(event.target.value);
    setIsBlocking(event.target.value);
  };
  return (
    <form className="todo-list-addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="On Enter to do item"
        className="input"
        value={data}
        onChange={handleInput}
      />
    </form>
  );
}
export default AddForm;
