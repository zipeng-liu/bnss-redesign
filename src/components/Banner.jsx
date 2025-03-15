import React from "react";

function Banner() {
  // Inline style for the banner block
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
    </div>
  );
}

export default Banner;
