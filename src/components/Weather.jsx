// src/components/Weather.jsx
import React, { useState, useEffect } from "react";
import {
  FaCloud,
  FaThermometerHalf,
  FaTint,
  FaWind,
  FaArrowUp,
  FaArrowDown,
  FaCalendarDay,
  FaCloudRain,
  FaSun,
} from "react-icons/fa";

function Weather() {
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

  // Current weather condition - this could come from an API in a real app
  const currentWeather = "overcast";

  // Get background colors and icons based on weather condition
  const getWeatherStyles = () => {
    switch (currentWeather) {
      case "clear":
        return {
          gradientFrom: darkMode ? "#1a2a48" : "#e1f5fe",
          gradientTo: darkMode ? "#2c4270" : "#bbdefb",
          icon: <FaSun className="weather-icon sun-icon" />,
        };
      case "rain":
        return {
          gradientFrom: darkMode ? "#1a2c36" : "#cfd8dc",
          gradientTo: darkMode ? "#2c3e50" : "#b0bec5",
          icon: <FaCloudRain className="weather-icon rain-icon" />,
        };
      case "overcast":
      default:
        return {
          gradientFrom: darkMode ? "#2b2b2b" : "#eceff1",
          gradientTo: darkMode ? "#3b4a56" : "#cfd8dc",
          icon: <FaCloud className="weather-icon cloud-icon" />,
        };
    }
  };

  const { gradientFrom, gradientTo, icon } = getWeatherStyles();

  return (
    <div
      className={`my-4 p-3 rounded ${
        darkMode ? "text-light" : ""
      } weather-container`}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Semi-transparent weather pattern background */}
      <div className="weather-pattern"></div>

      <h4 className={darkMode ? "text-light" : "text-dark"}>Weather Info</h4>

      <div className="my-3">
        <div className="d-flex align-items-center mb-3">
          {icon}
          <span className="fs-5 ms-2">10° — overcast clouds</span>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center mb-2">
              <FaTint className="me-2 weather-data-icon" />
              <span>55% humidity</span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <FaWind className="me-2 weather-data-icon" />
              <span>1m/s WNW</span>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex align-items-center mb-2">
              <FaArrowUp className="me-2 weather-data-icon" />
              <span>H: 11°</span>
            </div>

            <div className="d-flex align-items-center mb-2">
              <FaArrowDown className="me-2 weather-data-icon" />
              <span>L: 9°</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-top border-2">
        <div className="d-flex align-items-center">
          <FaCalendarDay className="me-2 weather-data-icon" />
          <small>8° Sat | 4° Sun | 6° Mon | 7° Tue | 10° Wed</small>
        </div>
      </div>

      {/* Dynamic weather styles */}
      <style jsx>{`
        .weather-container {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .weather-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .weather-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.05;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${darkMode
            ? "ffffff"
            : "000000"}' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
          animation: panning 60s linear infinite;
        }

        .weather-icon {
          font-size: 2rem;
          margin-right: 0.5rem;
          color: ${darkMode ? "#e3f2fd" : "#2e8b57"};
        }

        .weather-data-icon {
          color: ${darkMode ? "#bbdefb" : "#2e8b57"};
        }

        .cloud-icon {
          animation: float 3s ease-in-out infinite;
        }

        .sun-icon {
          animation: pulse 2s ease-in-out infinite;
        }

        .rain-icon {
          animation: shake 2s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-1px);
          }
          75% {
            transform: translateX(1px);
          }
        }

        @keyframes panning {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Weather;
