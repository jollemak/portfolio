"use client";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-stretch justify-center px-4 bg-gray-900">
      <div className="flex items-stretch justify-center gap-2 sm:gap-4 md:gap-6 sm:px-4 md:px-6 ">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="relative flex items-center px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm text-white font-medium transition-all duration-200 hover:bg-orange-500 "
          >
            {item.name}
          </a>
        ))}

        {/* CV dropdown */}
        <div
          className="group relative flex items-center"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative flex items-center px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm text-white font-medium transition-all duration-200 hover:bg-orange-500 "          >
            CV
            <svg
              className="ml-1 h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
            </svg>
          </button>

          <div
            className={`absolute top-full right-0 pt-1 transform transition-all duration-150 z-50 ${
              isDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-1 pointer-events-none"
            }`}
          >
            <div className="w-40 bg-gray-800 rounded-md shadow-lg">
              <a
                href="/CV/CV Joel Mäkelä-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-white hover:bg-orange-500 rounded-t-md"
              >
                English (EN)
              </a>
              <a
                href="/CV/CV Joel Mäkelä-fi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-white hover:bg-orange-500 rounded-b-md"
              >
                Finnish (FI)
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
