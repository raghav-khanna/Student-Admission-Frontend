import React from "react";
import Programmes from "../Components/Nirnay/Programmes";
import BannerCards from "../Components/Prateek/BannerCards";
import InstituteGlance from "../Components/Prateek/InstituteGlance";
import PhotoGallery from "../Components/Nirnay/PhotoGallery";
import Footer from "../Components/Nirnay/Footer";
import GoToTop from "../Components/Nirnay/GoToTop";
import AboutUs from "../Components/Nirnay/AboutUs";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => setData(data.id))
  }, []);


  return (
    <>
      <p style={{color: 'pink'}}>{!data ? "Loading..." : data}</p>
      <div>
        <GoToTop />
        <BannerCards />
        <Programmes />
        <InstituteGlance />
        <PhotoGallery />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
