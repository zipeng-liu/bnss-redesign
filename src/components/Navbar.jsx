import React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ darkMode, toggleDarkMode }) {
  // Apply dark mode class to dropdown menus when enabled.
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
          {/* Desktop: Left side (logo and navigation buttons) */}
          <div className="d-none d-lg-flex align-items-center">
            <Link className="navbar-brand me-3" to="/">
              Burnaby North Secondary School
            </Link>
            <ul className="navbar-nav flex-row">
              {/* School Info Dropdown */}
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="schoolInfoDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  School Information
                </a>
                <ul
                  className={dropdownMenuClass}
                  aria-labelledby="schoolInfoDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/accessibility"
                    >
                      Accessibility at North
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/administration/bell-schedules"
                    >
                      Administration - Bell Schedules
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/administration/code-of-conduct"
                    >
                      Administration - Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/school-info/alumni">
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/board-of-education"
                    >
                      Board of Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/documents/school-plan"
                    >
                      Documents - School Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/registration-course-selection"
                    >
                      Registration &amp; Course Selection
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/school-fees"
                    >
                      School Fees
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/staff-directory"
                    >
                      Staff Directory
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/start-of-school-info"
                    >
                      Start of School Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/travelling-to-campus"
                    >
                      Travelling to Campus
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Programs Dropdown */}
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul
                  className={dropdownMenuClass}
                  aria-labelledby="programsDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/ap-exams-info"
                    >
                      AP &amp; Excel Program - AP Exams Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/grade8-12-excel-info"
                    >
                      AP &amp; Excel Program - Grade 8‑12 Excel Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/benefits-of-ap"
                    >
                      AP &amp; Excel Program - Benefits of AP
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/advanced-placement-course-descriptions"
                    >
                      AP &amp; Excel Program - Advanced Placement Course
                      Descriptions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/ap-capstone-program"
                    >
                      AP &amp; Excel Program - AP Capstone Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/career-programs/careers-ig"
                    >
                      Career Programs - Careers IG
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/connect-success-programs"
                    >
                      Connect &amp; Success Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/district/career-training/film-broadcast"
                    >
                      District Programs - Career Training at North - Film &amp;
                      Broadcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/district/career-training/music-production"
                    >
                      District Programs - Career Training at North - Music
                      Production &amp; Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ell/ell-support-site"
                    >
                      ELL Programme - ELL Support Site
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/programs/re-think">
                      Re-Think
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/sports/hockey-academy"
                    >
                      Sports Academies - Hockey Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/sports/sd41-sfu-soccer"
                    >
                      Sports Academies - SD41/SFU Soccer Program
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Depts Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="deptsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul
                  className={dropdownMenuClass}
                  aria-labelledby="deptsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/depts/ace-it">
                      ACE‑IT Programmes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/applied-skills/business-education"
                    >
                      Applied Skills - Business Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/applied-skills/home-economics"
                    >
                      Applied Skills - Home Economics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/applied-skills/technology-education"
                    >
                      Applied Skills - Technology Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/career-education"
                    >
                      Career Education (CLC)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/indigenous-education"
                    >
                      Indigenous Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/english">
                      English
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/learning-support"
                    >
                      Learning Support Services (LSS)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/mathematics">
                      Mathematics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/modern-languages"
                    >
                      Modern Languages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/physical-health/flex"
                    >
                      Physical &amp; Health Education - FLEX
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/social-studies">
                      Social Studies Department
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/student-services"
                    >
                      Student Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/visual-performing-arts"
                    >
                      Visual Performing Arts Department
                    </Link>
                  </li>
                </ul>
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
              {darkMode ? (
                <FiSun size={20} color="#fff" />
              ) : (
                <FiMoon size={20} />
              )}
            </button>
          </div>

          {/* Mobile view: Combined row with menu toggler, search bar, and dark/light mode button */}
          <div className="d-flex d-lg-none align-items-center w-100">
            <button
              className="navbar-toggler me-2"
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
              className="form-control me-2 flex-grow-1"
              placeholder="Search"
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
              {darkMode ? (
                <FiSun size={20} color="#fff" />
              ) : (
                <FiMoon size={20} />
              )}
            </button>
          </div>
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
              <Link className="dropdown-item" to="/">
                Home
              </Link>
              {/* Mobile School Info Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="mobileSchoolInfoDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  School Info
                </a>
                <ul
                  className={dropdownMenuClass}
                  aria-labelledby="mobileSchoolInfoDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/accessibility"
                    >
                      Accessibility at North
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/administration/bell-schedules"
                    >
                      Administration - Bell Schedules
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/administration/code-of-conduct"
                    >
                      Administration - Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/school-info/alumni">
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/board-of-education"
                    >
                      Board of Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/documents/school-plan"
                    >
                      Documents - School Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/registration-course-selection"
                    >
                      Registration &amp; Course Selection
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/school-fees"
                    >
                      School Fees
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/staff-directory"
                    >
                      Staff Directory
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/start-of-school-info"
                    >
                      Start of School Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/school-info/travelling-to-campus"
                    >
                      Travelling to Campus
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobile Programs Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="mobileProgramsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul
                  className={dropdownMenuClass}
                  aria-labelledby="mobileProgramsDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/ap-exams-info"
                    >
                      AP &amp; Excel Program - AP Exams Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/grade8-12-excel-info"
                    >
                      AP &amp; Excel Program - Grade 8‑12 Excel Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/benefits-of-ap"
                    >
                      AP &amp; Excel Program - Benefits of AP
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/advanced-placement-course-descriptions"
                    >
                      AP &amp; Excel Program - Advanced Placement Course
                      Descriptions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ap-excel/ap-capstone-program"
                    >
                      AP &amp; Excel Program - AP Capstone Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/career-programs/careers-ig"
                    >
                      Career Programs - Careers IG
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/connect-success-programs"
                    >
                      Connect &amp; Success Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/district/career-training/film-broadcast"
                    >
                      District Programs - Career Training at North - Film &amp;
                      Broadcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/district/career-training/music-production"
                    >
                      District Programs - Career Training at North - Music
                      Production &amp; Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/ell/ell-support-site"
                    >
                      ELL Programme - ELL Support Site
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/programs/re-think">
                      Re-Think
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/sports/hockey-academy"
                    >
                      Sports Academies - Hockey Academy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/programs/sports/sd41-sfu-soccer"
                    >
                      Sports Academies - SD41/SFU Soccer Program
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobile Depts Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="mobileDeptsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Depts
                </a>
                <ul
                  className={dropdownMenuClass}
                  aria-labelledby="mobileDeptsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/depts/ace-it">
                      ACE‑IT Programmes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/applied-skills/business-education"
                    >
                      Applied Skills - Business Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/applied-skills/home-economics"
                    >
                      Applied Skills - Home Economics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/applied-skills/technology-education"
                    >
                      Applied Skills - Technology Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/career-education"
                    >
                      Career Education (CLC)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/indigenous-education"
                    >
                      Indigenous Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/english">
                      English
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/learning-support"
                    >
                      Learning Support Services (LSS)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/mathematics">
                      Mathematics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/modern-languages"
                    >
                      Modern Languages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/physical-health/flex"
                    >
                      Physical &amp; Health Education - FLEX
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/depts/social-studies">
                      Social Studies Department
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/student-services"
                    >
                      Student Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/depts/visual-performing-arts"
                    >
                      Visual Performing Arts Department
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
