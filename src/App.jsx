import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TaskBoard from "./components/TaskBoard";
import Navbar from "./components/Navbar";
import WWFooter from "./components/WWFooter";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleTimeString();
  };

  const addTask = (newTask) => {
    const newTaskWithId = {
      ...newTask,
      id: getFormattedDate(),
      status: "To Do",
      timeLog: [
        `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
      ],
    };
    setTasks((prevTasks) => [...prevTasks, newTaskWithId]);
  };

  const selectTask = (id) => {
    setSelectedTaskId(id);
  };

  const moveTask = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: newStatus,
              timeLog: [
                `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
              ],
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } transition-colors duration-300`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-col lg:flex-row">
        <Sidebar
          tasks={tasks}
          addTask={addTask}
          selectTask={selectTask}
          isDarkMode={isDarkMode}
        />
        <TaskBoard
          tasks={tasks}
          moveTask={moveTask}
          deleteTask={deleteTask}
          isDarkMode={isDarkMode}
        />
      </div>
      <WWFooter isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
