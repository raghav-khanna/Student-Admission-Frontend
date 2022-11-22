import React from 'react';
import "./UgMode.css";
import bannerImage from "../../Assets/HomePage.jpg";
import { FaGraduationCap } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const UgModes = () => {
    return (
        <div>
            <div className="banner-image-container">
                <figure>
                    <img className="banner-image" src={bannerImage} alt="Banner Image" />
                </figure>
                <Button
                    size="lg"
                    variant="danger"
                    className="btn"
                >
                    ADMISSIONS PORTAL
                </Button>
            </div>
            <div className="cards">
                <div className="card-item">
                    <figure>
                        <FaGraduationCap />
                    </figure>
                    <br />
                    <strong>REGULAR MODE</strong>
                    <br />
                    (For Indian Nationals through JEE (Main) Exam)
                </div>
                <div
                    className="card-item"
                    style={{ backgroundColor: "rgb(190, 33, 33)" }}
                >
                    <figure>
                        <FaGraduationCap />
                    </figure>
                    <br />
                    <strong>DASA MODE</strong>
                    <br />
                    Direct Admissions of<br /> Students Abroad<br /> (For FN/NRI/OCI/CIWG)
                </div>
                <div className="card-item">
                    <figure>
                        <FaGraduationCap />
                    </figure>
                    <br />
                    <strong>DIRECT MODE</strong>
                    <br />
                    (Board Toppers)
                </div>
                <div
                    className="card-item"
                    style={{ backgroundColor: "rgb(190, 33, 33)" }}
                >
                    <figure>
                        <FaGraduationCap />
                    </figure>
                    <br />
                    <strong>LATERAL ENTRY MODE</strong>
                    <br />
                    (Admission in 3rd semester)
                </div>
            </div>
            <section className="ug-mode">
                <div className="ug-mode-container">
                    <p className="ug-mode-p">
                        LNMIIT offers <strong>B.Tech</strong> in Communication and Computer Engineering (CCE), Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), and Mechanical Engineering (ME) and <strong>B. Tech.-M. Tech. (5-Year Integrated Dual Degree)</strong> in Computer Science and Engineering (CSE) and Electronics and Communication Engineering (ECE). Admissions to the above mentioned programmes are through following modes.
                    </p>
                    <p className="ug-mode-p-red">
                        <strong>Important Note:</strong> All admissions to LNMIIT Jaipur are handled ONLY through the admission portal on our website. We do NOT have any other companies/ individuals or online portals representing us and providing admission services.
                    </p>
                    <Button
                        size="lg"
                        variant="danger"
                        className="btn"
                    >
                        APPLY NOW
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default UgModes