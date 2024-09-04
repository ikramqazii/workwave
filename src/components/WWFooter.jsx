import React from "react";
import Social from "./Social";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const WWFooter = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-6 px-12 cursor-default ${
        isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-900"
      } transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2
              className={`${
                isDarkMode ? "text-gray-100" : "text-gray-800"
              }  text-lg font-semibold`}
            >
              Contact Us
            </h2>
            <p className="text-sm mt-2">
              Feel free to reach out via social media.
            </p>
          </div>
          <div className="flex flex-row items-center space-x-4 mt-4 md:mt-0">
            <Social
              Icon={FaInstagram}
              href="https://www.instagram.com/ikramqazii"
              text="Instagram"
              isDarkMode={isDarkMode}
            />
            <Social
              Icon={FaLinkedin}
              href="https://www.linkedin.com/in/ikramqazi"
              text="LinkedIn"
              isDarkMode={isDarkMode}
            />
            <Social
              Icon={FaWhatsapp}
              href="https://wa.me/+923360367687"
              text="WhatsApp"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-6">
        <p className="text-sm hover:text-gray-600 transition-colors duration-300">
          © 2024 WorkWave - Ikram Qazi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default WWFooter;
