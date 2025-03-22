// src/components/ContactInfo.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaFax, FaUsers } from "react-icons/fa";

function ContactInfo() {
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

  return (
    <div className={`my-4 ${darkMode ? "text-light" : ""}`}>
      <h4>Contact Information</h4>

      <div className="my-3">
        <div className="d-flex align-items-start mb-2">
          <FaMapMarkerAlt className="me-2 mt-1" style={{ color: "#2e8b57" }} />
          <span>
            Burnaby North Secondary School
            <br />
            751 Hammarskjold Drive
            <br />
            Burnaby, BC V5B 4A1
          </span>
        </div>

        <div className="d-flex align-items-start mb-2">
          <FaPhone className="me-2 mt-1" style={{ color: "#2e8b57" }} />
          <span>604-296-6875</span>
        </div>

        <div className="d-flex align-items-start mb-2">
          <FaFax className="me-2 mt-1" style={{ color: "#2e8b57" }} />
          <span>604-296-6877</span>
        </div>
      </div>

      <div className="d-flex align-items-start mt-3">
        <FaUsers className="me-2 mt-1" style={{ color: "#2e8b57" }} />
        <span>
          To contact specific staff members, see the{" "}
          <a
            href="/school-info/staff-directory"
            className={darkMode ? "text-light" : ""}
            style={{ color: darkMode ? "lightblue" : "#2e8b57" }}
          >
            Staff Directory
          </a>
          .
        </span>
      </div>
    </div>
  );
}

export default ContactInfo;
