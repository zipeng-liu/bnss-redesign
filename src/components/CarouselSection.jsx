// src/components/Slideshow.jsx
import React from "react";

function Slideshow() {
  return (
    <div className="container my-4">
      <div
        id="mySlideshow"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ position: "relative", marginBottom: "30px" }} // Added margin to make room for indicators
      >
        {/* Indicators at the very bottom */}
        <div
          className="carousel-indicators"
          style={{ bottom: "-20px", zIndex: 4 }} // Positioned below the carousel
        >
          <button
            type="button"
            data-bs-target="#mySlideshow"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#mySlideshow"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#mySlideshow"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#mySlideshow"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#mySlideshow"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#mySlideshow"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 (Active) */}
          <div
            className="carousel-item active"
            style={{ height: "300px", position: "relative" }} // Reduced height
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/01/20/new-building-move-information/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            >
              <img
                src="https://north.burnabyschools.ca/wp-content/uploads/2023/12/New-Building_Banner-2.png"
                alt="New Building & Move Information"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              {/* Gradient overlay instead of solid black */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "120px", // Taller gradient area
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Text positioned at the bottom with no background */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 15px",
                  zIndex: 3,
                }}
              >
                <h5 className="text-white">
                  <span className="text-white text-decoration-none">
                    New Building &amp; Move Information &amp; Virtual Tour
                  </span>
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
                  Updated January 10, 2024 – View our Virtual Tour of the
                  Building
                </p>
              </div>
            </a>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item"
            style={{ height: "300px", position: "relative" }} // Reduced height
          >
            <a
              href="https://north.burnabyschools.ca/blog/2025/03/12/mamma-mia-the-musical-come-see-it-this-week/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            >
              <img
                src="https://north.burnabyschools.ca/wp-content/uploads/2025/03/Mamma-Mia_banner.png"
                alt="Mamma Mia – The Musical"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              {/* Gradient overlay instead of solid black */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "120px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Text positioned at the bottom with no background */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 15px",
                  zIndex: 3,
                }}
              >
                <h5 className="text-white">
                  <span className="text-white text-decoration-none">
                    "Mamma Mia!"–The Musical–Come see it this week!
                  </span>
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
                  Experience the magic and joy of ABBA's music brought to life
                  on stage!
                </p>
              </div>
            </a>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item"
            style={{ height: "300px", position: "relative" }} // Reduced height
          >
            <a
              href="https://north.burnabyschools.ca/blog/2025/03/10/verify-your-myed-account-login-is-working-online-report-cards-are-coming-soon/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            >
              <img
                src="https://north.burnabyschools.ca/wp-content/uploads/2017/04/family_portal.png"
                alt="Verify your MyEd Account"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              {/* Gradient overlay instead of solid black */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "120px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Text positioned at the bottom with no background */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 15px",
                  zIndex: 3,
                }}
              >
                <h5 className="text-white">
                  <span className="text-white text-decoration-none">
                    Verify your MyEd Account Login is Working
                  </span>
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
                  Report cards are published on MyEd as PDF reports
                </p>
              </div>
            </a>
          </div>

          {/* Slide 4 */}
          <div
            className="carousel-item"
            style={{ height: "300px", position: "relative" }} // Reduced height
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/11/01/reduce-your-morning-stress/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            >
              <img
                src="https://north.burnabyschools.ca/wp-content/uploads/2017/09/traffic_congestion_edited-620x250.jpg"
                alt="Traffic Advisory"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              {/* Gradient overlay instead of solid black */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "120px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Text positioned at the bottom with no background */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 15px",
                  zIndex: 3,
                }}
              >
                <h5 className="text-white">
                  <span className="text-white text-decoration-none">
                    Traffic Advisory–Keep Students Safe
                  </span>
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
                  Stay safe at pick-up and drop-off with changing weather
                  conditions
                </p>
              </div>
            </a>
          </div>

          {/* Slide 5 */}
          <div
            className="carousel-item"
            style={{ height: "300px", position: "relative" }} // Reduced height
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/09/02/new-traffic-parking-changes/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            >
              <img
                src="https://north.burnabyschools.ca/wp-content/uploads/2024/01/traffic_parking_change_banner.png"
                alt="UPDATED September 2024 – Traffic & Parking Changes"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              {/* Gradient overlay instead of solid black */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "120px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Text positioned at the bottom with no background */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 15px",
                  zIndex: 3,
                }}
              >
                <h5 className="text-white">
                  <span className="text-white text-decoration-none">
                    UPDATED September 2024 – Traffic &amp; Parking Changes
                  </span>
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
                  New parking and traffic patterns are in effect
                </p>
              </div>
            </a>
          </div>

          {/* Slide 6 */}
          <div
            className="carousel-item"
            style={{ height: "300px", position: "relative" }} // Reduced height
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/09/01/new-reporting-order/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            >
              <img
                src="https://north.burnabyschools.ca/wp-content/uploads/2023/09/reporting_order_info.png"
                alt="New Reporting Order Information for Families"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              {/* Gradient overlay instead of solid black */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "120px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Text positioned at the bottom with no background */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  padding: "0 15px",
                  zIndex: 3,
                }}
              >
                <h5 className="text-white">
                  <span className="text-white text-decoration-none">
                    New Reporting Order Information for Families
                  </span>
                </h5>
                <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
                  Updated reporting policy implemented this school year
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Prev/Next Controls removed as requested */}
      </div>
    </div>
  );
}

export default Slideshow;
