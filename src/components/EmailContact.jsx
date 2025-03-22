// src/components/EmailContact.jsx
import React, { useState, useEffect } from "react";

function EmailContact() {
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
      <h4>Subscribe by Email</h4>
      <p>Get an email every time we post new information! Subscribe today.</p>
      <form>
        {/* Email input with inline button */}
        <div className="input-group mb-3">
          <input
            type="email"
            className={`form-control ${
              darkMode ? "bg-dark text-light border-secondary" : ""
            }`}
            placeholder="name@example.com"
            aria-label="Email address"
            aria-describedby="subscribe-button"
          />
          <button
            className="btn"
            type="submit"
            id="subscribe-button"
            style={{
              backgroundColor: "#2e8b57", // Sea Green color
              color: "#fff",
              border: "none",
            }}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailContact;
