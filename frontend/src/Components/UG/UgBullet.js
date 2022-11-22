import React from "react";
import "./UgBullet.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UgBullet = ({ bulletHeading = "Instructions to Apply", listArray = ["ABCD", "EFGH"] }) => {
    const props =
        [
            {
                head: "Note:",
                bullets: [
                    "The Institute has no provision for either Capitation Fee or Management Quota",
                    "The Institute reserves the right to reflect any changes with respect to the admission to a programme, number of rounds of seat allocations, respective deadlines, and also any changes as may be necessary in view of statutory requirements/ notifications from time-to-time",
                    "The number of seats mentioned above are tentative in nature. The number of seats may be changed appropriately considering the overall academic quality of incoming students, regulatory/statutory provisions, etc.",
                    "A maximum of 5% of the seats within each branch may be available for Non-resident Indian (NRI) candidates as per regulatory norms. (Such seats will be filled through DASA mode of admission.)"
                ]
            },
            {
                head: "Eligibility Criteria",
                bullets: [
                    "The applicant must be a citizen of India. (Candidates holding OCI status must have to apply under DASA mode.",
                    "The applicant must be appearing in Paper 1 (B.E. /B.Tech.) during one or more sessions of JEE (Main) 2022 Examination conducted by the National Testing Agency (NTA).",
                    "The applicant must have passed with an aggregate of minimum 60% marks or equivalent grade in Class 12th (10+2) examination. Applicants appearing in the class 12th examination are also eligible to apply.",
                    "The applicant must have secured an aggregate of minimum 60% marks or equivalent grade in Mathematics, Physics and Chemistry in Class 12th examination.",
                    "The applicant must have passed with an aggregate of minimum 60% marks or equivalent grade in Class 10th examination."
                ]
            }
        ];

    return (
        <section className="ug-regular-repeating-feature">
            <div className="ug-regular-repeating-feature-container">
                <div className="col-lg-12 col-md-12">
                    <h3 className="ug-regular-repeating-h3">
                        {bulletHeading}
                    </h3>
                    {/* <ul className="ug-regular-repeating-ul">
                        <li key={index} className="ug-regular-repeating-list-elements">
                            {value}
                        </li>
                    </ul> */}
                    {
                        props.map((item, idx) => (
                            <>
                                <h3 key={idx} className="ug-regular-repeating-h3">
                                    {item.head}
                                </h3>
                                <ul className="ug-regular-repeating-ul">
                                    {item.bullets.map((item1, idx1) => (
                                        <li key={idx1} className="ug-regular-repeating-list-elements">
                                            {item1}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ))
                    }

                </div>
            </div >
        </section >
    )
}

export default UgBullet;
