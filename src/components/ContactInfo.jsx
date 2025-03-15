// src/components/ContactInfo.jsx
import React from "react";

function ContactInfo() {
  return (
    <div className="my-4">
      <h4>Contact Information</h4>
      <p>
        Burnaby North Secondary School
        <br />
        751 Hammarskjold Drive
        <br />
        Burnaby, BC V5B 4A1
      </p>
      <p>
        Phone: 604-296-6875
        <br />
        Fax: 604-296-6877
      </p>
      <p>
        To contact specific staff members, see the{" "}
        <a href="/school-info/staff-directory">Staff Directory</a>.
      </p>
    </div>
  );
}

export default ContactInfo;
