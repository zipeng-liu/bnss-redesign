import React from "react";
// Importing all the corresponding icons from react-icons/fa
import {
  FaDesktop,
  FaCheck,
  FaRegCalendarCheck,
  FaRegCommentDots,
  FaPagelines,
  FaRegFutbol,
  FaRegNewspaper,
  FaCalendar,
  FaUtensils,
  FaChild,
  FaBriefcase,
  FaCertificate,
  FaGift,
  FaBook,
  FaUsers,
  FaPrint,
  FaUserFriends,
  FaLock,
  FaChartPie,
  FaCreditCard,
  FaGlobe,
  FaRegClock,
} from "react-icons/fa";

import JobOpportunity from "../components/JobOpportunity";

function QuickLinks() {
  // Map your original icon classes to the corresponding React Icons
  const linksData = [
    { icon: <FaDesktop />, text: "Provincial Assessments" },
    { icon: <FaCheck />, text: "Student Learning Survey" },
    { icon: <FaRegCalendarCheck />, text: "Agenda Info" },
    { icon: <FaRegCommentDots />, text: "AP Classroom" },
    { icon: <FaPagelines />, text: "AP & Excel Programs" },
    { icon: <FaRegFutbol />, text: "Athletics" },
    { icon: <FaRegNewspaper />, text: "Bulletin" },
    { icon: <FaCalendar />, text: "Calendar" },
    { icon: <FaUtensils />, text: "Cafeteria" },
    { icon: <FaChild />, text: "Career Life Connections 11/12" },
    { icon: <FaBriefcase />, text: "Career Programs" },
    { icon: <FaCertificate />, text: "Digital Citizenship" },
    { icon: <FaGift />, text: "Donation Info" },
    { icon: <FaBook />, text: "Library Catalogue" },
    { icon: <FaUsers />, text: "MyEd Portal Login" },
    { icon: <FaPrint />, text: "PaperCut Setup" },
    { icon: <FaUserFriends />, text: "Parent/Teacher Interview Sign-up" },
    { icon: <FaLock />, text: "Password Reset" },
    { icon: <FaChartPie />, text: "Problem of the Month" },
    { icon: <FaCreditCard />, text: "School Cash Online" },
    { icon: <FaGlobe />, text: "School Connect Web Access" },
    { icon: <FaRegClock />, text: "Service Hours" },
  ];

  return (
    <div>
      <JobOpportunity />
      <h4>Quick Links</h4>
      <ul className="list-group">
        {linksData.map((item, index) => (
          <li className="list-group-item d-flex align-items-center" key={index}>
            {/* Icon + text */}
            <span className="me-2">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;
