import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiHome, FiX, FiArrowLeft } from "react-icons/fi";

function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Main navigation categories with their dropdown items
  const navCategories = [
    {
      title: "School Information",
      items: [
        { title: "Accessibility at North", path: "/school-info/accessibility" },
        {
          title: "Administration - Bell Schedules",
          path: "/school-info/administration/bell-schedules",
        },
        {
          title: "Administration - Code of Conduct",
          path: "/school-info/administration/code-of-conduct",
        },
        { title: "Alumni", path: "/school-info/alumni" },
        {
          title: "Board of Education",
          path: "/school-info/board-of-education",
        },
        {
          title: "Documents - School Plan",
          path: "/school-info/documents/school-plan",
        },
        {
          title: "Registration & Course Selection",
          path: "/school-info/registration-course-selection",
        },
        { title: "School Fees", path: "/school-info/school-fees" },
        { title: "Staff Directory", path: "/school-info/staff-directory" },
        {
          title: "Start of School Info",
          path: "/school-info/start-of-school-info",
        },
        {
          title: "Travelling to Campus",
          path: "/school-info/travelling-to-campus",
        },
      ],
    },
    {
      title: "Programs",
      items: [
        {
          title: "AP & Excel Program - AP Exams Info",
          path: "/programs/ap-excel/ap-exams-info",
        },
        {
          title: "AP & Excel Program - Grade 8‑12 Excel Information",
          path: "/programs/ap-excel/grade8-12-excel-info",
        },
        {
          title: "AP & Excel Program - Benefits of AP",
          path: "/programs/ap-excel/benefits-of-ap",
        },
        {
          title: "AP & Excel Program - Advanced Placement Course Descriptions",
          path: "/programs/ap-excel/advanced-placement-course-descriptions",
        },
        {
          title: "AP & Excel Program - AP Capstone Program",
          path: "/programs/ap-excel/ap-capstone-program",
        },
        {
          title: "Career Programs - Careers IG",
          path: "/programs/career-programs/careers-ig",
        },
        {
          title: "Connect & Success Programs",
          path: "/programs/connect-success-programs",
        },
        {
          title:
            "District Programs - Career Training at North - Film & Broadcast",
          path: "/programs/district/career-training/film-broadcast",
        },
        {
          title:
            "District Programs - Career Training at North - Music Production & Technology",
          path: "/programs/district/career-training/music-production",
        },
        {
          title: "ELL Programme - ELL Support Site",
          path: "/programs/ell/ell-support-site",
        },
        { title: "Re-Think", path: "/programs/re-think" },
        {
          title: "Sports Academies - Hockey Academy",
          path: "/programs/sports/hockey-academy",
        },
        {
          title: "Sports Academies - SD41/SFU Soccer Program",
          path: "/programs/sports/sd41-sfu-soccer",
        },
      ],
    },
    {
      title: "Departments",
      items: [
        { title: "ACE‑IT Programmes", path: "/depts/ace-it" },
        {
          title: "Applied Skills - Business Education",
          path: "/depts/applied-skills/business-education",
        },
        {
          title: "Applied Skills - Home Economics",
          path: "/depts/applied-skills/home-economics",
        },
        {
          title: "Applied Skills - Technology Education",
          path: "/depts/applied-skills/technology-education",
        },
        { title: "Career Education (CLC)", path: "/depts/career-education" },
        { title: "Indigenous Education", path: "/depts/indigenous-education" },
        { title: "English", path: "/depts/english" },
        {
          title: "Learning Support Services (LSS)",
          path: "/depts/learning-support",
        },
        { title: "Mathematics", path: "/depts/mathematics" },
        { title: "Modern Languages", path: "/depts/modern-languages" },
        {
          title: "Physical & Health Education - FLEX",
          path: "/depts/physical-health/flex",
        },
        { title: "Science", path: "/depts/science" },
        { title: "Social Studies Department", path: "/depts/social-studies" },
        { title: "Student Services", path: "/depts/student-services" },
        {
          title: "Visual Performing Arts Department",
          path: "/depts/visual-performing-arts",
        },
      ],
    },
  ];

  // Toggle mobile full-screen menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveCategory(null); // Reset active category
  };

  // Select category for mobile view
  const toggleCategory = (index) => {
    setActiveCategory(index);
  };

  // Back to main categories
  const backToCategories = () => {
    setActiveCategory(null);
  };

  // Apply dark mode class to dropdown menus when enabled
  const dropdownMenuClass = `dropdown-menu ${
    darkMode ? "dropdown-menu-dark" : ""
  }`;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } position-relative`}
      >
        <div className="container-fluid">
          {/* Desktop: Left side (home button and navigation buttons) */}
          <div className="d-none d-lg-flex align-items-center">
            <Link className="btn btn-outline-secondary me-3" to="/">
              <FiHome size={18} className="me-1" /> Home
            </Link>
            <ul className="navbar-nav flex-row">
              {/* Map through nav categories for desktop view */}
              {navCategories.map((category, index) => (
                <li className="nav-item dropdown me-3" key={index}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id={`dropdown-${category.title}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontWeight: "500",
                      backgroundColor: "transparent",
                    }}
                  >
                    {category.title}
                  </a>
                  <ul
                    className={dropdownMenuClass}
                    aria-labelledby={`dropdown-${category.title}`}
                    style={{
                      minWidth: "200px",
                    }}
                    data-bs-popper="static" // Force dropdown to open downward
                  >
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <Link className="dropdown-item" to={item.path}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: Right side (dark/light mode button only) */}
          <div className="d-none d-lg-flex align-items-center ms-auto">
            <button
              className="btn"
              onClick={toggleDarkMode}
              style={{
                color: darkMode ? "#fff" : "inherit",
                border: "none",
                background: "transparent",
              }}
            >
              {darkMode ? (
                <FiSun size={20} color="#fff" />
              ) : (
                <FiMoon size={20} />
              )}
            </button>
          </div>

          {/* Mobile view: Combined row with menu toggler and dark/light mode button */}
          <div className="d-flex d-lg-none align-items-center w-100">
            <Link to="/" className="navbar-brand me-auto">
              <FiHome size={20} />
            </Link>

            <button
              className="navbar-toggler me-2 border-0"
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <button
              className="btn"
              onClick={toggleDarkMode}
              style={{
                color: darkMode ? "#fff" : "inherit",
                border: "none",
                background: "transparent",
              }}
            >
              {darkMode ? (
                <FiSun size={20} color="#fff" />
              ) : (
                <FiMoon size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile: Full-screen menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-fullscreen-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
            background: darkMode
              ? "rgba(0,0,0,0.95)"
              : "rgba(255,255,255,0.95)",
            overflow: "auto",
          }}
        >
          <div
            className="menu-header d-flex justify-content-between align-items-center p-3"
            style={{
              borderBottom: `1px solid ${darkMode ? "#495057" : "#dee2e6"}`,
              position: "sticky",
              top: 0,
              background: darkMode ? "#212529" : "#f8f9fa",
              zIndex: 1,
            }}
          >
            {activeCategory !== null ? (
              <>
                <button
                  className={`btn btn-sm ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  onClick={backToCategories}
                  style={{ background: "transparent" }}
                >
                  <FiArrowLeft size={18} className="me-2" />
                  Back
                </button>
                <h5 className={`m-0 ${darkMode ? "text-light" : "text-dark"}`}>
                  {navCategories[activeCategory].title}
                </h5>
              </>
            ) : (
              <h5 className={`m-0 ${darkMode ? "text-light" : "text-dark"}`}>
                Menu
              </h5>
            )}

            <button
              className="btn"
              onClick={toggleMobileMenu}
              style={{ background: "transparent" }}
            >
              <FiX
                size={24}
                className={darkMode ? "text-light" : "text-dark"}
              />
            </button>
          </div>

          <div className="p-3">
            {activeCategory === null ? (
              // Show main categories
              <div className="menu-categories">
                {navCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`btn btn-lg w-100 text-start mb-3 py-3 ${
                      darkMode
                        ? "btn-outline-light border-secondary"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => toggleCategory(index)}
                  >
                    {category.title}
                  </button>
                ))}

                {/* Home button in the menu */}
                <Link
                  to="/"
                  className={`btn btn-lg w-100 text-start mb-3 py-3 ${
                    darkMode ? "btn-success" : "btn-success"
                  }`}
                  onClick={toggleMobileMenu}
                >
                  <FiHome size={18} className="me-2" />
                  Home
                </Link>
              </div>
            ) : (
              // Show items of selected category
              <div className="menu-items">
                <div className="list-group">
                  {navCategories[activeCategory].items.map((item, idx) => (
                    <Link
                      key={idx}
                      className={`list-group-item list-group-item-action py-3 ${
                        darkMode ? "bg-dark text-light border-secondary" : ""
                      }`}
                      to={item.path}
                      onClick={toggleMobileMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CSS to ensure dropdowns open downward */}
      <style jsx>{`
        /* Override Bootstrap's dropdown positioning for consistent behavior */
        .dropdown-menu[data-bs-popper] {
          top: 100% !important;
          left: 0 !important;
          margin-top: 0.125rem !important;
          transform: none !important;
        }

        /* Mobile fullscreen menu transitions */
        .mobile-fullscreen-menu {
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
