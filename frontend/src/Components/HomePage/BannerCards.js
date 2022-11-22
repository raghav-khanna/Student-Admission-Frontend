import React from "react";
import "./Banner.css";
import bannerImage from "../../Assets/HomePage.jpg";
import { FaGraduationCap } from "react-icons/fa";

const BannerCards = () => {
  return (
    <div>
      <div className="banner-image-container">
        <figure>
          <img className="banner-image" src={bannerImage} alt="Banner Image" />
        </figure>
      </div>
      <div className="cards">
        <div className="card-item">
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>UG Admissions</strong>
          <br />
          B.Tech./B.Tech.-M.Tech. <br />
          (5 Year Integrated Dual Degree)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "rgb(190, 33, 33)" }}
        >
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>PG Engineering Admissions</strong>
          <br />
          (M.Tech./MS by Research)
        </div>
        <div className="card-item">
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>PG Science Admissions</strong>
          <br />
          (M.SC.)
        </div>
        <div
          className="card-item"
          style={{ backgroundColor: "rgb(190, 33, 33)" }}
        >
          <figure>
            <FaGraduationCap />
          </figure>
          <br />
          <strong>Doctoral Admissions</strong>
          <br />
          (Ph.D.)
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
