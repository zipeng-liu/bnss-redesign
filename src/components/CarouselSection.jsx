// src/components/Slideshow.jsx
import React from "react";

function Slideshow() {
  return (
    <div className="container my-4">
      <div
        id="mySlideshow"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ position: "relative" }}
      >
        {/* Indicators at the bottom */}
        <div
          className="carousel-indicators"
          style={{ bottom: "10px" }} // Moves the dots near the bottom
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
            style={{ height: "400px", position: "relative" }}
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/01/20/new-building-move-information/"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
            {/* Caption near bottom, above indicators */}
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                bottom: "60px", // Sits above the indicators at 10px
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  minHeight: "80px",
                }}
              >
                <h5>
                  <a
                    href="https://north.burnabyschools.ca/blog/2024/01/20/new-building-move-information/"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    New Building &amp; Move Information &amp; Virtual Tour
                  </a>
                </h5>
                <p className="mb-0">
                  Updated January 10, 2024 – View our Virtual Tour of the
                  Building. Please be advised of the new traffic patterns in and
                  around our campus.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item"
            style={{ height: "400px", position: "relative" }}
          >
            <a
              href="https://north.burnabyschools.ca/blog/2025/03/12/mamma-mia-the-musical-come-see-it-this-week/"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                bottom: "60px",
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  minHeight: "80px",
                }}
              >
                <h5>
                  <a
                    href="https://north.burnabyschools.ca/blog/2025/03/12/mamma-mia-the-musical-come-see-it-this-week/"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    “Mamma Mia!”–The Musical–Come see it this week!
                  </a>
                </h5>
                <p className="mb-0">
                  Come see our Theatre Program’s 2025 presentation of Mamma
                  Mia!–The Musical. Experience the magic and joy of ABBA’s music
                  brought to life on stage!
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item"
            style={{ height: "400px", position: "relative" }}
          >
            <a
              href="https://north.burnabyschools.ca/blog/2025/03/10/verify-your-myed-account-login-is-working-online-report-cards-are-coming-soon/"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                bottom: "60px",
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  minHeight: "80px",
                }}
              >
                <h5>
                  <a
                    href="https://north.burnabyschools.ca/blog/2025/03/10/verify-your-myed-account-login-is-working-online-report-cards-are-coming-soon/"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify your MyEd Account Login is Working
                  </a>
                </h5>
                <p className="mb-0">
                  Report cards are published on MyEd as PDF reports. Parents
                  &amp; students will need to access their MyEd account in order
                  to view/print.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div
            className="carousel-item"
            style={{ height: "400px", position: "relative" }}
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/11/01/reduce-your-morning-stress/"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                bottom: "60px",
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  minHeight: "80px",
                }}
              >
                <h5>
                  <a
                    href="https://north.burnabyschools.ca/blog/2024/11/01/reduce-your-morning-stress/"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Traffic Advisory–Keep Students Safe
                  </a>
                </h5>
                <p className="mb-0">
                  With the changing weather and lower visibility, we want to
                  remind everyone to stay safe at pick-up and drop-off.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div
            className="carousel-item"
            style={{ height: "400px", position: "relative" }}
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/09/02/new-traffic-parking-changes/"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                bottom: "60px",
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  minHeight: "80px",
                }}
              >
                <h5>
                  <a
                    href="https://north.burnabyschools.ca/blog/2024/09/02/new-traffic-parking-changes/"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UPDATED September 2024 – Traffic &amp; Parking Changes
                  </a>
                </h5>
                <p className="mb-0">
                  Parking and traffic pattern changes are in effect for
                  September 2024 due to the deconstruction of the old North
                  Building and repositioning of parking.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 6 */}
          <div
            className="carousel-item"
            style={{ height: "400px", position: "relative" }}
          >
            <a
              href="https://north.burnabyschools.ca/blog/2024/09/01/new-reporting-order/"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
            <div
              className="carousel-caption"
              style={{
                position: "absolute",
                bottom: "60px",
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px",
                  minHeight: "80px",
                }}
              >
                <h5>
                  <a
                    href="https://north.burnabyschools.ca/blog/2024/09/01/new-reporting-order/"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    New Reporting Order Information for Families
                  </a>
                </h5>
                <p className="mb-0">
                  The Ministry of Education and Child Care has updated its
                  reporting policy. Schools must implement the changes in the
                  2023-24 school year.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prev/Next Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mySlideshow"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mySlideshow"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
