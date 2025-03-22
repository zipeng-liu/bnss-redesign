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
      className={`p-2 button-nav ${darkMode ? "bg-dark" : "bg-light"}`}
      style={{
        borderTop: `1px solid ${darkMode ? "#495057" : "#dee2e6"}`,
        borderBottom: `1px solid ${darkMode ? "#495057" : "#dee2e6"}`,
      }}
    >
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {navItems.map((nav, index) => (
            <div className="dropdown m-1" key={index}>
              <button
                className={`btn ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                } dropdown-toggle`}
                type="button"
                id={`navDropdown${index}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {nav.title}
              </button>
              <ul
                className={`dropdown-menu ${
                  darkMode ? "dropdown-menu-dark" : ""
                }`}
                aria-labelledby={`navDropdown${index}`}
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
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .button-nav {
          position: relative;
          z-index: 900;
        }

        .dropdown-menu[data-bs-popper] {
          top: 100%;
          left: 0;
          margin-top: 0.125rem;
        }

        /* Ensure buttons have consistent size */
        .btn {
          min-width: 110px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .btn {
            font-size: 0.875rem;
            min-width: auto;
            padding: 0.375rem 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default AdditionalNav;
