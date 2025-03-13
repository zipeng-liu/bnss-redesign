import React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } position-relative`}
    >
      <div className="container-fluid">
        {/* Desktop: Left side (logo, school name, navigation buttons) */}
        <div className="d-none d-lg-flex align-items-center">
          <Link className="navbar-brand me-3" to="/">
            <img
              src="/logo192.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            Burnaby North Secondary School
          </Link>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/admissions">
                Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop: Right side (search bar and dark/light mode button) */}
        <div className="d-none d-lg-flex align-items-center ms-auto">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search"
            style={{ width: "200px" }}
          />
          <button
            className="btn"
            onClick={toggleDarkMode}
            style={{
              color: darkMode ? "#fff" : "inherit",
              border: "none",
              background: "transparent",
            }}
          >
            {darkMode ? <FiSun size={20} color="#fff" /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile view: Combined row with menu toggler, search bar, and dark/light mode button */}
        <div className="d-flex d-lg-none align-items-center w-100 justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            type="text"
            className="form-control mx-2"
            placeholder="Search"
            style={{ width: "200px" }}
          />
          <button
            className="btn"
            onClick={toggleDarkMode}
            style={{
              color: darkMode ? "#fff" : "inherit",
              border: "none",
              background: "transparent",
            }}
          >
            {darkMode ? <FiSun size={20} color="#fff" /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile: Collapsible nav links as an overlay dropdown */}
        <div className="collapse d-lg-none" id="mobileNav">
          <div
            className={`position-absolute w-100 ${
              darkMode ? "bg-dark" : "bg-light"
            }`}
            style={{ top: "100%", left: 0, zIndex: 1050 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item ps-3">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/admissions"
                >
                  Admissions
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link
                  className={`nav-link ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
