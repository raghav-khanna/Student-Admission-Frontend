import React from "react";
import "./Banner.css";
import bannerImage from "../../Assets/HomePage.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner-image-container">
        <div className="banner-image"></div>
      </div>
      {/* <div className="cards">
        <div className="card-item">
          <strong>UG Admissions</strong>
          <br />
          B.Tech./B.Tech.-M.Tech.(5 Year Integrated Dual Degree)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "rgb(190, 33, 33)" }}
        >
          <strong>PG Engineering Admissions</strong>
          <br />
          (M.Tech./MS by Research)
        </div>
        <div className="card-item">
          <strong>PG Science Admissions</strong>
          <br />
          (M.SC.)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "rgb(190, 33, 33)" }}
        >
          <strong>Doctoral Admissions</strong>
          <br />
          (Ph.D.)
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
