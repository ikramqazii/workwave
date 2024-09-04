import React from "react";

export default function Social({ Icon, href, text, isDarkMode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-2 sm:py-1.5 lg:px-3 lg:py-1 group transition duration-300 ${
        isDarkMode ? "text-slate-300" : "text-slate-900"
      }`}
    >
      <Icon
        className={`w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 mr-1 transition-colors duration-300 ${
          isDarkMode
            ? "text-slate-100 group-hover:text-slate-400"
            : "text-slate-800 group-hover:text-slate-600"
        }`}
      />
      <span
        className={`text-xs sm:text-xs md:text-sm lg:text-base md:block lg:block hidden transition-colors duration-300 ${
          isDarkMode
            ? "text-slate-400 group-hover:text-slate-100"
            : "text-slate-600 group-hover:text-slate-800"
        }`}
      >
        {text}
      </span>
    </a>
  );
}
