// src/components/JobOpportunity.jsx
import React, { useState, useEffect } from "react";

function JobOpportunity() {
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
    <div
      className={`my-4 p-3 border text-center ${
        darkMode ? "bg-dark text-light border-secondary" : "bg-light text-dark"
      }`}
    >
      {/* Image at the top */}
      <h4>Job Opportunity</h4>
      <img
        src="/images/41-logo-2.png" // Replace with your actual image path
        alt="View Open Positions"
        style={{ width: "180px", cursor: "pointer" }}
      />
      <p>Great Place to Work &amp; Learn</p>

      {/* Green button linking to the careers page */}
      <a
        href="https://portal.burnabyschools.ca/sd41-careers"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{
          backgroundColor: "#2e8b57", // Sea Green color
          color: "#fff",
          border: "none",
        }}
      >
        Read More
      </a>
    </div>
  );
}

export default JobOpportunity;
