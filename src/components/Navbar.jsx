import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />

          <span className="text-base sm:text-xl font-bold text-gray-800">
            Homeric IND Sports Management
          </span>
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <ul className={`sm:flex space-x-6 font-medium text-gray-700 hidden`}>
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contacts" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pb-4 bg-white shadow">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            <li><a onClick={closeMenu} href="#home">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#projects">Projects</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
