// src/components/AdditionalNav.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdditionalNav() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.body.classList.contains("bg-dark");
      setDarkMode(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Create a MutationObserver to watch for class changes on document.body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Navigation items with their dropdown options
  const navItems = [
    {
      title: "Students",
      items: [
        "Student Handbook",
        "Course Selection",
        "Careers & Post-Secondary",
        "Learning Resources",
        "Graduation Information",
        "Student Services",
      ],
    },
    {
      title: "Parents",
      items: [
        "Parent Advisory Council",
        "SchoolCash Online",
        "MyEd BC Parent Portal",
        "Parent Resources",
        "Parent Events",
        "Forms & Documents",
      ],
    },
    {
      title: "Staff",
      items: [
        "Staff Directory",
        "Teacher Resources",
        "Curriculum Resources",
        "Professional Development",
        "School Calendar",
        "Room Bookings",
      ],
    },
    {
      title: "Programs",
      items: [
        "AP & Excel",
        "Athletics",
        "Career Programs",
        "Music Programs",
        "Visual Arts",
        "Learning Support Services",
      ],
    },
    {
      title: "About",
      items: [
        "School History",
        "Mission & Vision",
        "Administration",
        "Contact Us",
        "School Map",
        "Bell Schedule",
      ],
    },
  ];

  return (
    <div
      className={`navbar navbar-expand-lg secondary-navbar ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      style={{
        borderTop: `1px solid ${darkMode ? "#495057" : "#dee2e6"}`,
        borderBottom: `1px solid ${darkMode ? "#495057" : "#dee2e6"}`,
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        background: darkMode
          ? "linear-gradient(to right, #343a40, #212529, #343a40)"
          : "linear-gradient(to right, #f8f9fa, #e9ecef, #f8f9fa)",
      }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#additionalNavContent"
          aria-controls="additionalNavContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="additionalNavContent"
        >
          <ul className="navbar-nav">
            {navItems.map((nav, index) => (
              <li className="nav-item dropdown mx-2" key={index}>
                <a
                  className="nav-link dropdown-toggle px-3 py-2 rounded-3"
                  href="#"
                  id={`navbarDropdown${index}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    fontWeight: "500",
                    color: darkMode
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(0,0,0,0.85)",
                  }}
                >
                  {nav.title}
                </a>
                <ul
                  className={`dropdown-menu ${
                    darkMode ? "dropdown-menu-dark" : ""
                  }`}
                  aria-labelledby={`navbarDropdown${index}`}
                >
                  {nav.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        className="dropdown-item"
                        to={`/${nav.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS to ensure dropdowns open downward and style the navbar */}
      <style jsx>{`
        .secondary-navbar {
          position: relative;
          z-index: 999;
        }

        /* Add subtle pattern overlay */
        .secondary-navbar::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: ${darkMode
            ? "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3C/g%3E%3C/svg%3E\")"
            : "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3C/g%3E%3C/svg%3E\")"};
          pointer-events: none;
        }

        /* Override Bootstrap's dropdown positioning for consistent behavior */
        .dropdown-menu {
          margin-top: 0;
        }

        /* Simple hover effect for dropdown toggles */
        .nav-link.dropdown-toggle:hover {
          background-color: ${darkMode
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.05)"};
        }

        /* Ensure all dropdowns appear below their triggers */
        .dropdown-menu[data-bs-popper] {
          top: 100%;
          left: 0;
        }

        /* Add transition for smooth hover effect */
        .nav-link {
          transition: background-color 0.2s ease;
        }
      `}</style>
    </div>
  );
}

export default AdditionalNav;
