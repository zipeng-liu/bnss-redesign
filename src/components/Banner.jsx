import React from "react";
// Import the Twitter icon as a placeholder for "X"
import { FaTwitter } from "react-icons/fa";

function Banner() {
  const bannerStyle = {
    background: "radial-gradient(circle, #5a1f12, #360404)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "40px 20px",
    color: "#fff",
    textAlign: "center",
  };

  return (
    <div style={bannerStyle}>
      {/* Replace /images/logo.png with your actual logo path */}
      <img
        src="/images/logo.png"
        alt="School Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <h1>Burnaby North Secondary School</h1>
      <h3>Burnaby School District</h3>

      {/* Row with District 41 logo and X link */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop: "10px",
        }}
      >
        {/* District 41 Logo */}
        <a
          href="https://burnabyschools.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/41.png"
            alt="Burnaby School District 41"
            style={{ width: "auto", height: "30px" }}
          />
        </a>

        {/* "X" / Twitter Link */}
        <a
          href="https://x.com/bnss"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none",
            gap: "5px",
          }}
        >
          <FaTwitter style={{ fontSize: "30px", color: "#1DA1F2" }} />
          <span>@bnss</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
