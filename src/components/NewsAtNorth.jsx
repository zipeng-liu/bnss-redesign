// src/components/NewsAtNorth.jsx
import React, { useState, useEffect } from "react";

function NewsAtNorth() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = document.body.classList.contains("bg-dark");
      setDarkMode(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Create a MutationObserver to watch for class changes on document.body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);
  // "What's New" data
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
        "Dressing for Winter Weather Conditions Whether this is your first Canadian winter, or a familiar climate to you, it's worth remembering that dressing for cold weather is very different than […]",
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
        "Updated January 22, 2025 Caregivers* are invited to attend our school's Student Planning Night event on January 22, 2025 to learn about Registration & Course Selection for next year. *Due […]",
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
      <div className="news-cards">
        {dataArray.map((news) => (
          <div
            className={`card mb-4 news-card ${
              darkMode ? "bg-dark text-light" : ""
            }`}
            key={news.id}
          >
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={news.image}
                  className="img-fluid rounded-start h-100"
                  alt={news.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    minHeight: "180px",
                  }}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body h-100 d-flex flex-column">
                  <h5 className="card-title">{news.title}</h5>
                  <small
                    className={`${
                      darkMode ? "text-light-50" : "text-muted"
                    } mb-2`}
                  >
                    {news.published}
                  </small>
                  <p className="card-text" style={{ flexGrow: 1 }}>
                    {news.summary}
                  </p>
                  <div className="mt-auto text-end">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: "#2e8b57", // Sea Green color
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* "What's New" Section - Title changed as requested */}
      <h4 className={`mb-4 ${darkMode ? "text-light" : ""}`}>What's New</h4>
      {renderNewsCards(whatsNewData)}

      <style jsx>{`
        .news-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid
            ${darkMode ? "rgba(255,255,255,0.125)" : "rgba(0,0,0,0.125)"};
          overflow: hidden;
        }

        .news-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px
            ${darkMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.1)"};
        }

        .text-light-50 {
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 767.98px) {
          .news-card .row {
            flex-direction: column;
          }

          .news-card img {
            border-radius: 4px 4px 0 0 !important;
            max-height: 200px;
          }
        }
      `}</style>
    </div>
  );
}

export default NewsAtNorth;
