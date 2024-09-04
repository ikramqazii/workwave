import React from "react";
import TaskCard from "./TaskCard";

const TaskBoard = ({ tasks, moveTask, deleteTask, isDarkMode }) => {
  const columns = ["To Do", "In Progress", "Done", "History"];

  return (
    <div className="cursor-default w-full lg:w-4/5 p-4 gap-2 flex flex-col md:flex-row justify-between rounded-lg">
      {columns.map((column) => (
        <div
          key={column}
          className={`w-full md:w-1/4 p-3 mb-4 md:mb-0 rounded-lg border-[1px] transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800 text-gray-300 border-gray-600"
              : "bg-gray-100 text-gray-800 border-gray-300"
          } flex flex-col items-center`}
        >
          <h3 className="font-bold text-lg mb-4 text-center">{column}</h3>
          <div className="flex flex-col items-center w-full">
            {tasks
              .filter((task) => task.status === column)
              .reverse()
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  moveTask={moveTask}
                  deleteTask={deleteTask}
                  isDarkMode={isDarkMode}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
