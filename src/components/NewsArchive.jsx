// src/components/NewsArchive.jsx
import React, { useState, useEffect } from "react";

function NewsArchive() {
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

  // Updated archive data
  const archives = [
    { date: "13/01/2025", title: "It's Pie Time!–Musical Theatre Fundraiser" },
    { date: "11/01/2025", title: "Assessment Week Events Jan. 20-24" },
    {
      date: "21/12/2024",
      title: "Winter Break–School Reopens Jan. 6, 2025–Day 1",
    },
    {
      date: "22/11/2024",
      title: "Support BNS Sports! Soccer Final Tomorrow–Live or Online",
    },
    {
      date: "31/08/2024",
      title: "Need a timetable change? Submit a Course Correction Request",
    },
    { date: "17/06/2024", title: "Yearbook Distribution is June 21st" },
    { date: "11/06/2024", title: "Viking Valhalla–Summer Spirit Week!" },
    { date: "11/06/2024", title: "Locker Cleanout–by June 21, 2024" },
    { date: "10/06/2024", title: "School Carnival–Thursday, June 13th" },
    { date: "05/06/2024", title: "Request a Locker for 2024-2025" },
  ];

  return (
    <div className="my-4">
      <h4 className={darkMode ? "text-light" : ""}>News Archive</h4>
      <ul className={`list-group ${darkMode ? "list-group-dark" : ""}`}>
        {archives.map((item, index) => (
          <li
            className={`list-group-item ${
              darkMode ? "bg-dark text-light border-secondary" : ""
            }`}
            key={index}
            style={{
              transition: "background-color 0.2s ease",
              cursor: "pointer",
            }}
          >
            <strong style={{ color: darkMode ? "#a5d6a7" : "#2e8b57" }}>
              {item.date}
            </strong>{" "}
            - {item.title}
          </li>
        ))}
      </ul>

      {/* View All Archives button - centered */}
      <div className="text-center mt-3">
        <a
          href="/news/archive"
          className="btn"
          style={{
            backgroundColor: "#2e8b57", // Sea Green color
            color: "#fff",
            border: "none",
          }}
        >
          View All Archives
        </a>
      </div>

      {/* Add custom styles for dark mode list items */}
      <style jsx>{`
        .list-group-item:hover {
          background-color: ${darkMode ? "#343a40" : "#f8f9fa"};
        }
      `}</style>
    </div>
  );
}

export default NewsArchive;
