import React, { useState } from "react";

const Sidebar = ({ tasks, addTask, selectTask, isDarkMode }) => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.description) {
      addTask(newTask);
      setNewTask({ title: "", description: ""});
    }
  };

  const capitalizeFirstLetter = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      className={`cursor-default w-full lg:w-1/5 p-4 min-h-[50vh]${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } rounded-br-md transition-all duration-300`}
    >
      <form onSubmit={handleAddTask}>
        <input
          maxLength="20"
          type="text"
          placeholder="Title (20 Characters)"
          value={capitalizeFirstLetter(newTask.title)}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              title: capitalizeFirstLetter(e.target.value),
            })
          }
          className={`w-full mb-2 p-2 border rounded transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-700 text-gray-200 border-gray-600"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        />
        <input
          maxLength="50"
          type="text"
          placeholder="Description (50 Characters)"
          value={capitalizeFirstLetter(newTask.description)}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              description: capitalizeFirstLetter(e.target.value),
            })
          }
          className={`w-full mb-2 p-2 border rounded transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-700 text-gray-200 border-gray-600"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        />
        <div className="flex justify-end mb-4">
          <button
            type="submit"
            className={`${
              isDarkMode
                ? "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
            } px-3 py-1 rounded transition-colors duration-300`}
          >
            Add Task
          </button>
        </div>
      </form>
      <ul className="list-disc pl-5 space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`cursor-pointer p-2 rounded transition-colors duration-300 hover:bg-gray-200 ${
              isDarkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-800"
            }`}
            onClick={() => selectTask(task.id)}
          >
            {capitalizeFirstLetter(task.title)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
