import { useState } from "react";

const Task = (props) => {
  const [taskValue, setTaskValue] = useState(props.value);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
    props.edit(props.id, event.target.value);
  };

  return (
    <div className="task" style={{ backgroundColor: props.color }}>
      <input
        className="task--input"
        type="text"
        value={taskValue}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <button className="delete-btn" onClick={() => props.delete(props.id)}>
        <i className="gg-trash trash-icon"></i>
      </button>
    </div>
  );
};

export default Task;
