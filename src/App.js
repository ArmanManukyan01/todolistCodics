import React, { useState } from "react";
import "./App.scss";
import Todo from "./component/Todo.js";
import TodoForm from "./component/TodoForm.js";
import useDataRequest from "./hooks/useDataRequest";
import TYPE_STATUS from "./util/Type_Status";
import { getFilterByStatus } from "./reselect/connector";
import { useSelector } from "react-redux";
import AddForm from "./component/AddForm";

function App() {
  // hooks
  const {
    getTodos,
    removeTodo,
    handleUpdate,
  } = useDataRequest();
  // state
  const [indexEdit, setIndexEdit] = useState(null);
  const [status, setStatus] = useState(TYPE_STATUS.All);
  const [itemEdit, setItemEdit] = useState(null);

  const filterByStatus = useSelector((state) =>
    getFilterByStatus(state, status)
  );

  // func handle
  const callBackUpdate = () => {
    setIndexEdit(null);
    setItemEdit(null);
  };
  const handleClickUpdate = (indexEdit, value) => {
    handleUpdate(indexEdit, value, callBackUpdate, itemEdit);
  };

  // ref
  const refInput = React.useRef();

  const handleUpdateText = (todo, index) => {
    setIndexEdit(index);
    setItemEdit(todo);
    refInput.current.handleValueText(todo.text);
  };

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="app">
      <h1>To Do List</h1>
      <div className="todo-list">
      <AddForm />
        {filterByStatus.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            handleUpdate={handleUpdateText}
            removeTodo={removeTodo}
          />
        ))}

        <TodoForm
          indexEdit={indexEdit}
          refCallback={refInput}
          handleClickUpdate={handleClickUpdate}
        />
      </div>
    </div>
  );
}
export default App;
