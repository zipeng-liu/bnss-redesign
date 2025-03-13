import React from "react";

function Footer({ darkMode }) {
  return (
    <footer
      className={`text-center py-3 mt-auto ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container">
        &copy; Burnaby North Secondary School. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
