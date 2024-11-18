import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023{" "}
        <a href="/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
          <a href="/home" className="hover:underline me-4 md:me-6">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="/policy" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
