// src/components/NewsAtNorth.jsx
import React from "react";

function NewsAtNorth() {
  // "What's New @ North" data
  const whatsNewData = [
    {
      id: 1,
      title:
        "Verify your MyEd Account Login is Working–Online Report Cards are Coming Soon",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2017/04/family_portal-200x110.png",
      published: "Posted 4 days ago",
      summary:
        "REMINDER – ACCESS – MYED STUDENT PORTAL ACCOUNTS Report cards are published on MyEd as PDF reports. Parents & students will need to access their MyEd account in order to view/print […]",
      link: "https://north.burnabyschools.ca/blog/2025/03/10/verify-your-myed-account-login-is-working-online-report-cards-are-coming-soon/",
    },
    {
      id: 2,
      title: "Snow is coming! Are you ready?",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2022/11/Winter_Canada_banner-pexels-andre-furtado-3813200-200x110.jpg",
      published: "Posted on 29/01/2025",
      summary:
        "Dressing for Winter Weather Conditions Whether this is your first Canadian winter, or a familiar climate to you, it’s worth remembering that dressing for cold weather is very different than […]",
      link: "https://north.burnabyschools.ca/blog/2025/01/29/snow-is-coming-are-you-ready/",
    },
    {
      id: 3,
      title: "Student Planning Night Presentations",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2025/01/2025-student-planning-night-QR_banner-200x110.png",
      published: "Posted on 22/01/2025",
      summary: "For full details, check the Student Planning Night post.",
      link: "https://north.burnabyschools.ca/blog/2025/01/22/student-planning-night-presentations/",
    },
    {
      id: 4,
      title:
        "Student Planning Night–Course Selection Info for Gr. 7 -11 Families",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2025/01/Student-Planning-for-2025-26_Graphic_banner-200x110.png",
      published: "Posted on 22/01/2025",
      summary:
        "Updated January 22, 2025 Caregivers* are invited to attend our school’s Student Planning Night event on January 22, 2025 to learn about Registration & Course Selection for next year. *Due […]",
      link: "https://north.burnabyschools.ca/blog/2025/01/22/open-house-night-grades-7-8-11/",
    },
    {
      id: 5,
      title: "Christmas Cheer–Classroom Collections Start Dec. 4!",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2015/11/christmas-cheer-feature-200x110.jpg",
      published: "Posted on 04/12/2024",
      summary:
        "Since 1989, Christmas Cheer has been supporting the Burnaby Christmas Bureau. Christmas Cheer is the longest running service club at Burnaby North. Since its inception, we have raised over $300,000 […]",
      link: "https://north.burnabyschools.ca/blog/2024/12/04/christmas-cheer/",
    },
  ];

  // Reusable function to render cards
  const renderNewsCards = (dataArray) => {
    return (
      <div className="row">
        {dataArray.map((news) => (
          <div className="col-md-4 mb-3" key={news.id}>
            <div className="card h-100" style={{ width: "100%" }}>
              {/* Fixed image size: 200x110, object-fit cover */}
              <img
                src={news.image}
                className="card-img-top"
                alt={news.title}
                style={{
                  width: "100%",
                  height: "130px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{news.title}</h5>
                {/* Published date in small text */}
                <small className="text-muted">{news.published}</small>
                <p className="card-text mt-2" style={{ flexGrow: 1 }}>
                  {news.summary}
                </p>
                {/* Dark gray button with "Continue Reading" text */}
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-auto"
                  style={{
                    backgroundColor: "#555",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Continue Reading
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* "What's New @ North" Section */}
      <h4>What’s New @ North</h4>
      {renderNewsCards(whatsNewData)}
    </div>
  );
}

export default NewsAtNorth;
