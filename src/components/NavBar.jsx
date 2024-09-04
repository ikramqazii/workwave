import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="text-xl font-semibold flex items-center cursor-default">
        <img
          src="/project-management.png"
          className="w-14 h-10 pr-4"
          alt="Work Wave Icon"
        />
        Work Wave
      </div>

      {/* Pass the isDarkMode and toggleDarkMode props to ToggleSwitch */}
      <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
