import React from "react";

export const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`transition-all duration-500 group `}>
      <div>
        <div
          className="flex items-center justify-center pt-2 cursor-pointer "
          onClick={toggleDarkMode}
        >
          <h1
            className={`${
              isDarkMode ? "text-white" : "text-gray-800"
            } text-sm pr-2 transition-all duration-300 opacity-0 group-hover:opacity-100`}
          >
            Dark Mode
          </h1>
          <div
            className={`w-12 h-6 ${
              isDarkMode ? "bg-slate-700" : "bg-gray-300"
            } rounded-full p-1 cursor-pointer flex items-center justify-between`}
          >
            <div
              className={`w-4 h-4 ${
                isDarkMode
                  ? "bg-gray-300 ring-gray-800 translate-x-[1.5rem]"
                  : "bg-amber-300 ring-white"
              } group-hover:ring-2 ring-1 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
