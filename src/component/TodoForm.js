import React, { useState } from "react";
// import "./../App.scss";

function TodoForm(props) {
  const { handleClickUpdate, refCallback, indexEdit } = props;

  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (indexEdit) {
      handleClickUpdate(indexEdit, value);
    }
    setValue("");
  };

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleValueText = (text) => {
    setValue(text);
  };

  React.useEffect(() => {
    refCallback.current = {
      handleValueText,
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {(indexEdit || indexEdit === 0) && (
        <input
          type="text"
          className="input"
          value={value}
          onChange={handleInput}
        />
      )}
    </form>
  );
}
TodoForm.defaultProps = {
  refCallback: {
    current: null,
  },
};
export default TodoForm;
