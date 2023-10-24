import { useEffect, useState } from "react";
import Task from "./Task";

const BACKGROUND_COLORS = [
  "Olive",
  "orange",
  "yellow",
  "green",
  "red",
  "purple",
  "pink",
  "brown",
];

const TodoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState({ value: "" });

  const getBackgroundColor = () => {
    return BACKGROUND_COLORS[Math.floor(Math.random() * 8)];
  };

  const handleChange = (event) => {
    setNewTask({ value: event.target.value, color: getBackgroundColor() });
  };

  const handleEdit = (id, value) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === id ? { ...task, value: value } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTask.value !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask({ value: "", color: "" });
    }
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task, index) => index !== id));
  };

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todolist--container">
      <div className="input--container">
        <input
          maxLength={20}
          className="new--task--input"
          type="text"
          placeholder="enter task"
          value={newTask.value}
          onChange={handleChange}
        />
        <button className="add--btn" onClick={handleAddTask}>
          add
        </button>
      </div>
      <div className="task--container">
        {tasks.map((task, index) => (
          <Task
            value={task.value}
            id={index}
            key={index}
            color={task.color}
            delete={handleDelete}
            edit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
