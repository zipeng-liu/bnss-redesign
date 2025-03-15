// src/components/EmailContact.jsx
import React from "react";

function EmailContact() {
  return (
    <div className="my-4">
      <h4>Contact Us by Email</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Your Name"
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default EmailContact;
