import React from "react";

const Header = () => {
  return (
    <header className="px-2 border-b flex items-center justify-between h-14">
      <a
        className="dark:text-purple-500 uppercase font-bold text-purple-800"
        href="#"
      >
        webDev
      </a>
      <nav className="hidden md:flex items-center">
        <ul className="inline-flex items-center">
          <li>
            <a className="header-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="header-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="header-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul className="inline-flex items-center">
          <li>
            <button className="header-btn transition-all duration-300">
              Login
            </button>
          </li>
          <li>
            <button className="header-btn transition-all duration-300">
              Register
            </button>
          </li>
        </ul>
      </nav>
      <button className="inline-block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
