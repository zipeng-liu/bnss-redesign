import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

function Banner() {
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

  const bannerStyle = {
    background: darkMode
      ? `linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(40, 40, 70, 0.9) 100%)`
      : `linear-gradient(135deg, rgba(90, 31, 18, 0.9) 0%, rgba(54, 4, 4, 0.85) 100%)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "40px 20px",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    position: "relative",
    overflow: "hidden",
    transition: "background 0.5s ease",
  };

  // Animated gradient borders
  const gradientBorderStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
    background: darkMode
      ? "linear-gradient(90deg, #3f51b5, #7986cb, #3f51b5)"
      : "linear-gradient(90deg, #ff9800, #ffeb3b, #ff9800)",
    backgroundSize: "200% 200%",
    animation: "gradient-slide 5s linear infinite",
    zIndex: 3, // Ensure it's above other elements
  };

  // Wave animation at the bottom
  const waveStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30px",
    opacity: 0.3,
    background: darkMode
      ? 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%233f51b5" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>\')'
      : 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ff9800" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>\')',
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    animation: "wave 10s linear infinite",
    zIndex: 1, // Ensure proper stacking
  };

  // Background pattern - diagonal lines or dots
  const patternStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: darkMode
      ? "radial-gradient(circle, rgba(255, 255, 255, 0.1) 2px, transparent 2px)"
      : "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 10px, transparent 10px, transparent 20px)",
    backgroundSize: darkMode ? "30px 30px" : "20px 20px",
    opacity: 0.3,
    animation: darkMode ? "sparkle 3s linear infinite" : "",
  };

  const titleStyle = {
    fontWeight: "700",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    marginTop: "40px", // Increased space between logo and title
    marginBottom: "15px",
    position: "relative",
    display: "inline-block",
  };

  const subtitleStyle = {
    fontWeight: "400",
    opacity: "0.9",
    marginBottom: "20px",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
    fontSize: "1.5rem",
    letterSpacing: "0.5px",
  };

  return (
    <div style={bannerStyle}>
      <div style={gradientBorderStyle}></div>
      <div style={patternStyle}></div>
      <div style={waveStyle}></div>

      {/* Container for the logo and text */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* School logo - static (no animation) */}
        <img
          src="/images/logo.png"
          alt="School Logo"
          style={{
            width: "150px",
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
          }}
        />

        <h1 style={titleStyle}>Burnaby North Secondary School</h1>
        <h2 style={subtitleStyle}>Excellence • Innovation • Integrity</h2>

        {/* Quick info icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaCalendarAlt />
            <span>Est. 1922</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaGraduationCap />
            <span>Burnaby School District 41</span>
          </div>
        </div>

        {/* Row with District 41 logo and X link */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginTop: "15px",
          }}
        >
          {/* District 41 Logo */}
          <a
            href="https://burnabyschools.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: "transform 0.2s ease",
              display: "block",
              padding: "5px",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="/images/41-logo-1.png"
              alt="Burnaby School District 41"
              style={{
                width: "auto",
                height: "30px",
                filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3))",
              }}
            />
          </a>

          {/* "X" / Twitter Link with hover effect */}
          <a
            href="https://x.com/bnss"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              textDecoration: "none",
              gap: "8px",
              padding: "5px 10px",
              borderRadius: "20px",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaXTwitter style={{ fontSize: "24px" }} />
            <span>@bnss</span>
          </a>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes gradient-slide {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes wave {
          0% {
            background-position-x: 0%;
          }
          100% {
            background-position-x: 100%;
          }
        }

        @keyframes sparkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

export default Banner;
