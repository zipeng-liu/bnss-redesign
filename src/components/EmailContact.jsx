// src/components/EmailContact.jsx
import React from "react";

function EmailContact() {
  return (
    <div className="my-4">
      <h4>Subscribe by Email</h4>
      <p>Get an email every time we post new information! Subscribe today.</p>
      <form>
        {/* Email Only */}
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
        </div>

        {/* Dark gray Subscribe button */}
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default EmailContact;
