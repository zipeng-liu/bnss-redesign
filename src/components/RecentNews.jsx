// src/components/NewsBlogSection.jsx
import React from "react";

function RecentNews() {
  // "Recent News" data
  const recentNewsData = [
    {
      id: 6,
      title: "“Mamma Mia!”–The Musical–Come see it this week!",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2025/03/Mamma-Mia_banner-200x110.png",
      published: "Posted 2 days ago",
      summary:
        "Come see our Theatre Program’s 2025 presentation of Mamma Mia!–The Musical in our new Theatre! March 12-14 Experience the magic and joy of ABBA’s music brought to life on stage! […]",
      link: "https://north.burnabyschools.ca/blog/2025/03/12/mamma-mia-the-musical-come-see-it-this-week/",
    },
    {
      id: 7,
      title: "WINTER WEATHER PROCEDURES",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2017/02/SNOWpexels-photo-58098-200x110.jpeg",
      published: "Posted on 31/01/2025",
      summary:
        "Check the District site for up to date procedures and contacts. Weather Related School Closures It’s Winter and there’s a chill in the air. That means it is time to […]",
      link: "https://north.burnabyschools.ca/blog/2025/01/31/winter-weather-procedures/",
    },
    {
      id: 8,
      title: "Food Drive–Feb. 3-14, 2025",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2025/01/Food-drive_banner-200x110.png",
      published: "Posted on 21/01/2025",
      summary:
        "The Burnaby North Senior Leadership Team will be collecting non-perishable food items from February 3-14, 2025. If you have items for donation, please bring them to one of the boxes […]",
      link: "https://north.burnabyschools.ca/blog/2025/01/21/canned-food-drive/",
    },
    {
      id: 9,
      title: "PAC Meetings–Next Meeting February 3, 2025",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2015/12/PAC-200x110.jpg",
      published: "Posted on 06/01/2025",
      summary:
        "Parent Advisory Committee Meeting All caregivers welcome! To All Parents & Incoming Parents of Burnaby North Secondary School! Please check your email for the message from the school that includes […]",
      link: "https://north.burnabyschools.ca/blog/2025/01/06/pac/",
    },
    {
      id: 10,
      title: "Sign-Up for Fall Sports!",
      image:
        "https://north.burnabyschools.ca/wp-content/uploads/2024/09/fall-Sports-Collage-200x110.png",
      published: "Posted on 12/09/2024",
      summary:
        "Fall Sports Sign-Up is underway! Check the BNS Athletics site to check out the Fall Sports we are offering this year and the tryout or start dates for each team. […]",
      link: "https://north.burnabyschools.ca/blog/2024/09/12/sign-up-for-fall-sports/",
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
                  height: "180px",
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
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Read More
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
      {/* "Recent News" Section */}
      <h4 className="mt-5">Recent News</h4>
      {renderNewsCards(recentNewsData)}
    </div>
  );
}

export default RecentNews;
