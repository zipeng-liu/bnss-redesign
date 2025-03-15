// src/components/NewsArchive.jsx
import React from "react";

function NewsArchive() {
  const archives = [
    { date: "Mar 1, 2025", title: "Archived News Title 1" },
    { date: "Feb 15, 2025", title: "Archived News Title 2" },
    { date: "Jan 10, 2025", title: "Archived News Title 3" },
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
