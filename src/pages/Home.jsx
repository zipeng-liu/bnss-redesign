// src/pages/Home.jsx
import React from "react";
import Banner from "../components/Banner";
import CarouselSection from "../components/CarouselSection";
import QuickLinks from "../components/QuickLinks";
import NewsAtNorth from "../components/NewsAtNorth";
import RecentNews from "../components/RecentNews";
import NewsArchive from "../components/NewsArchive";
import ContactInfo from "../components/ContactInfo";
import Weather from "../components/Weather";
import EmailContact from "../components/EmailContact";

function Home() {
  return (
    <>
      <Banner />
      <CarouselSection />

      <div className="container my-4">
        <div className="row">
          {/* Left column: Quick Links */}
          <div className="col-md-8">
            <NewsAtNorth />
          </div>

          {/* Right column: News Blog Items */}
          <div className="col-md-4">
            <QuickLinks />
          </div>
        </div>

        <RecentNews />
        <NewsArchive />
        <ContactInfo />
        <Weather />
        <EmailContact />
      </div>
    </>
  );
}

export default Home;
