import React from "react";

const TaskStatusButtons = ({ currentStatus, moveTask, isDarkMode }) => {
  const statusLabels = ["To Do", "In Progress", "Done", "History"];

  return (
    <div className="flex flex-col mt-2 items-center w-full">
      {statusLabels.map(
        (status) =>
          status !== currentStatus && (
            <button
              key={status}
              className={`px-3 py-1 rounded w-4/5 my-2 max-w-52 transition-colors duration-300 ${
                isDarkMode
                  ? status === "To Do"
                    ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
                    : status === "In Progress"
                    ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                    : status === "Done"
                    ? "bg-green-600 hover:bg-green-700 active:bg-green-800"
                    : "bg-red-600 hover:bg-red-700 active:bg-red-800"
                  : status === "To Do"
                  ? "bg-gray-400 hover:bg-gray-500 active:bg-gray-600"
                  : status === "In Progress"
                  ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                  : status === "Done"
                  ? "bg-green-500 hover:bg-green-600 active:bg-green-700"
                  : "bg-red-500 hover:bg-red-600 active:bg-red-700"
              } text-white md:text-sm`}
              onClick={() => moveTask(status)}
            >
              {status}
            </button>
          )
      )}
    </div>
  );
};

export default TaskStatusButtons;
