// src/components/AdditionalNav.jsx
import React from "react";
import { Link } from "react-router-dom";

function AdditionalNav({ darkMode }) {
  // Conditionally apply dark-mode to the dropdown menus
  const dropdownMenuClass = `dropdown-menu ${
    darkMode ? "dropdown-menu-dark" : ""
  }`;

  return (
    <div className="container my-4">
      {/* A row centered horizontally */}
      <div className="row justify-content-center">
        {/* News Dropdown */}
        <div className="col-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              News
            </button>
            <ul className={dropdownMenuClass}>
              <li>
                <Link className="dropdown-item" to="/news/daily-bulletin">
                  Daily Bulletin
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/news/view-calendar">
                  View Calendar
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/news/twitter-feed">
                  X/Twitter Feed
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Students Dropdown */}
        <div className="col-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Students
            </button>
            <ul className={dropdownMenuClass}>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/agenda-planner-info"
                >
                  Agenda Planner Info
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/athletics">
                  Athletics
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/career-life-connections"
                >
                  Career Life Connections 11/12
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/clubs">
                  Clubs
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/core-competency-chats"
                >
                  Core Competency Chats
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/flex-time">
                  FLEX Time at North
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/graduation-events"
                >
                  Graduation Events Info
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/lockers">
                  Lockers at North
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/office365">
                  Office365
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/provincial-assessment"
                >
                  Provincial Assessment Information
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/scholarships">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/students/student-govt">
                  Student Gov’t (not an SD41site)
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/technology-for-students"
                >
                  Technology for Students
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/technology-for-students/digital-responsibilities"
                >
                  Students’ Digital Responsibilities
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/work-habits-rubric"
                >
                  Work Habits Rubric
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/students/viking-view-newspaper"
                >
                  Viking View Newspaper
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Parents Dropdown */}
        <div className="col-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Parents
            </button>
            <ul className={dropdownMenuClass}>
              <li>
                <Link
                  className="dropdown-item"
                  to="/parents/bns-handbook-general-info"
                >
                  BNS–Handbook of General Information
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/parents/pac">
                  Parent Advisory Committee (PAC)
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/parents/registration">
                  Registration
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/parents/report-absences">
                  Report Absences
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/parents/report-cards-explained"
                >
                  Report Cards Explained
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/parents/report-cards-explained/work-habits-rubric"
                >
                  Work Habits Rubric
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/parents/resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Staff Dropdown */}
        <div className="col-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Staff
            </button>
            <ul className={dropdownMenuClass}>
              <li>
                <Link
                  className="dropdown-item"
                  to="/staff/district-staff-portal"
                >
                  District Staff Portal
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/staff/facility-bookings">
                  Facility Bookings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/staff/groupwise-archive">
                  GroupWise Archive
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/staff/myedbc">
                  MyEdBC
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/staff/outlook-webmail">
                  Outlook Webmail
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/staff/pro-d-site">
                  Pro‑D Site
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/staff/staff-check-in-form">
                  Staff Check‑in Form
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/staff/staff-technology-resources"
                >
                  Staff Technology Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Library Dropdown */}
        <div className="col-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Library
            </button>
            <ul className={dropdownMenuClass}>
              <li>
                <Link className="dropdown-item" to="/library/catalogue">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/library/learning-commons">
                  Learning Commons
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalNav;
