import React, { useState, useEffect } from "react";
// Importing all the corresponding icons from react-icons/fa
import {
  FaDesktop,
  FaCheck,
  FaRegCalendarCheck,
  FaRegCommentDots,
  FaPagelines,
  FaRegFutbol,
  FaRegNewspaper,
  FaCalendar,
  FaUtensils,
  FaChild,
  FaBriefcase,
  FaCertificate,
  FaGift,
  FaBook,
  FaUsers,
  FaPrint,
  FaUserFriends,
  FaLock,
  FaChartPie,
  FaCreditCard,
  FaGlobe,
  FaRegClock,
} from "react-icons/fa";

import JobOpportunity from "../components/JobOpportunity";

function QuickLinks() {
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

  // Map your original icon classes to the corresponding React Icons
  const linksData = [
    { icon: <FaDesktop />, text: "Provincial Assessments" },
    { icon: <FaCheck />, text: "Student Learning Survey" },
    { icon: <FaRegCalendarCheck />, text: "Agenda Info" },
    { icon: <FaRegCommentDots />, text: "AP Classroom" },
    { icon: <FaPagelines />, text: "AP & Excel Programs" },
    { icon: <FaRegFutbol />, text: "Athletics" },
    { icon: <FaRegNewspaper />, text: "Bulletin" },
    { icon: <FaCalendar />, text: "Calendar" },
    { icon: <FaUtensils />, text: "Cafeteria" },
    { icon: <FaChild />, text: "Career Life Connections 11/12" },
    { icon: <FaBriefcase />, text: "Career Programs" },
    { icon: <FaCertificate />, text: "Digital Citizenship" },
    { icon: <FaGift />, text: "Donation Info" },
    { icon: <FaBook />, text: "Library Catalogue" },
    { icon: <FaUsers />, text: "MyEd Portal Login" },
    { icon: <FaPrint />, text: "PaperCut Setup" },
    { icon: <FaUserFriends />, text: "Parent/Teacher Interview Sign-up" },
    { icon: <FaLock />, text: "Password Reset" },
    { icon: <FaChartPie />, text: "Problem of the Month" },
    { icon: <FaCreditCard />, text: "School Cash Online" },
    { icon: <FaGlobe />, text: "School Connect Web Access" },
    { icon: <FaRegClock />, text: "Service Hours" },
  ];

  return (
    <div>
      <JobOpportunity />
      <h4 className={darkMode ? "text-light" : ""}>Quick Links</h4>
      <ul className={`list-group ${darkMode ? "list-group-dark" : ""}`}>
        {linksData.map((item, index) => (
          <li
            className={`list-group-item d-flex align-items-center ${
              darkMode ? "bg-dark text-light border-secondary" : ""
            }`}
            key={index}
            style={{
              transition: "background-color 0.2s ease",
              cursor: "pointer",
            }}
          >
            {/* Icon + text */}
            <span
              className={`me-2 ${darkMode ? "text-light" : ""}`}
              style={{ color: darkMode ? "#fff" : "#2e8b57" }}
            >
              {item.icon}
            </span>
            {item.text}
          </li>
        ))}
      </ul>

      {/* Add custom styles for dark mode list items */}
      <style jsx>{`
        .list-group-item:hover {
          background-color: ${darkMode ? "#343a40" : "#f8f9fa"};
        }
      `}</style>
    </div>
  );
}

export default QuickLinks;
