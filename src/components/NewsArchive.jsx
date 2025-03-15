// src/components/NewsArchive.jsx
import React from "react";

function NewsArchive() {
  // Updated archive data
  const archives = [
    { date: "13/01/2025", title: "It’s Pie Time!–Musical Theatre Fundraiser" },
    { date: "11/01/2025", title: "Assessment Week Events Jan. 20-24" },
    {
      date: "21/12/2024",
      title: "Winter Break–School Reopens Jan. 6, 2025–Day 1",
    },
    {
      date: "22/11/2024",
      title: "Support BNS Sports! Soccer Final Tomorrow–Live or Online",
    },
    {
      date: "31/08/2024",
      title: "Need a timetable change? Submit a Course Correction Request",
    },
    { date: "17/06/2024", title: "Yearbook Distribution is June 21st" },
    { date: "11/06/2024", title: "Viking Valhalla–Summer Spirit Week!" },
    { date: "11/06/2024", title: "Locker Cleanout–by June 21, 2024" },
    { date: "10/06/2024", title: "School Carnival–Thursday, June 13th" },
    { date: "05/06/2024", title: "Request a Locker for 2024-2025" },
  ];

  return (
    <div className="my-4">
      <h4>News Archive</h4>
      <ul className="list-group">
        {archives.map((item, index) => (
          <li className="list-group-item" key={index}>
            <strong>{item.date}</strong> - {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsArchive;
