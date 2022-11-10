//Carousel Bootstrap
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import i1 from "../../Assets/p1.png";
import i2 from "../../Assets/p2.png";
import i3 from "../../Assets/p3.png";
import "./Photo.css";
const PhotoGallery = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="picture" src={i1} alt="FirstSlide" />
        {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="picture" src={i2} alt="Second slide" />

        {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="picture" src={i3} alt="Third slide" />

        {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoGallery;
