// src/components/JobOpportunity.jsx
import React from "react";

function JobOpportunity() {
  return (
    <div className="my-4 p-3 border bg-light text-center">
      {/* Image at the top */}
      <h4>Job Opportunity</h4>
      <img
        src="/images/41-logo-2.png" // Replace with your actual image path
        alt="View Open Positions"
        style={{ width: "180px", cursor: "pointer" }}
      />
      <p>Great Place to Work &amp; Learn</p>

      {/* Dark gray button linking to the careers page */}
      <a
        href="https://portal.burnabyschools.ca/sd41-careers"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{
          backgroundColor: "#555",
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
