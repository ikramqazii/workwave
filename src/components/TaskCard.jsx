import React from "react";
import { RxCross2 } from "react-icons/rx";
import TaskStatusButtons from "./TaskStatusButton";

const TaskCard = ({ task, moveTask, deleteTask, isDarkMode }) => {
  const statusGradients = {
    "To Do": isDarkMode
      ? "bg-gradient-to-b from-gray-600 via-gray-800 to-gray-800 "
      : "bg-gradient-to-b from-gray-300 via-gray-100 to-gray-100 ",
    "In Progress": isDarkMode
      ? "bg-gradient-to-b from-blue-600 via-gray-800 to-gray-800 "
      : "bg-gradient-to-b from-blue-300 via-gray-100 to-gray-100 ",
    Done: isDarkMode
      ? "bg-gradient-to-b from-green-600 via-gray-800 to-gray-800 "
      : "bg-gradient-to-b from-green-300 via-gray-100 to-gray-100 ",
    History: isDarkMode
      ? "bg-gradient-to-b from-red-600 via-gray-800 to-gray-800 "
      : "bg-gradient-to-b from-red-300 via-gray-100 to-gray-100 ",
  };

  const cardGradient =
    statusGradients[task.status] ||
    (isDarkMode
      ? "bg-gradient-to-b from-gray-600 via-gray-900 to-gray-900"
      : "bg-gradient-to-b from-gray-300 via-gray-100 to-gray-100");

  return (
    <div
      className={`cursor-default group relative hover:scale-105 p-4 rounded-md shadow-md mb-4 transition-all duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      } border-[1px] ${
        isDarkMode ? "border-gray-600" : "border-gray-200"
      } ${cardGradient} min-w-full max-w-full`}
      style={{ transition: "all 300ms ease-in-out" }}
      title={task.title}
    >
      <button
        className={`group-hover:opacity-100 opacity-0 absolute top-2 right-2 w-6 h-6 transition-all duration-300 ${
          isDarkMode
            ? "text-white hover:text-gray-100 hover:scale-105"
            : "text-gray-800 hover:text-gray-700 hover:scale-105"
        }`}
        onClick={() => deleteTask(task.id)}
      >
        <RxCross2 />
      </button>
      <h4 className="font-bold text-lg md:text-xl truncate">{task.title}</h4>
      <p
        className={`${
          isDarkMode ? "text-gray-400" : "text-gray-800"
        } transition-all duration-300`}
      >
        {task.description}
      </p>
      <p className="text-xs text-gray-500 mt-1">{task.timeLog.join(", ")}</p>
      <TaskStatusButtons
        currentStatus={task.status}
        moveTask={(status) => moveTask(task.id, status)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default TaskCard;
