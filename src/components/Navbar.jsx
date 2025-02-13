import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/image.png';

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="drawer">
      <input
        id="mobile-menu"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setOpen((prev) => !prev)}
      />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="flex-none">
            <label htmlFor="mobile-menu" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          
          {/* Logo + Title */}
          <div className="flex-1 flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-20 h-20" />
            <span className="text-xl font-semibold">ArduinoBuddy</span>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-[1000]">
        <label htmlFor="mobile-menu" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content space-y-2.5">
          {[
            { path: "/", label: "Mode Selection" },
            { path: "/mode1", label: "General Instructions 1" },
            { path: "/mode2", label: "General Instructions 2" },
            { path: "/mode3", label: "Travel/Crowd Mode" },
            { path: "/mode4", label: "Education Mode" },
            { path: "/mode5", label: "Medical Mode" },
          ].map(({ path, label }) => (
            <li
              key={path}
              onClick={() => navigate(path)}
              className={`cursor-pointer p-2 rounded-lg ${
                isActive(path) ? "bg-black text-white" : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
