import React from "react";
import "./UgBullet.css";
import "bootstrap/dist/css/bootstrap.min.css";


function NumberList(props = ["AB","BC","CD"]) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    <li className="ug-regular-repeating-list-elements">{number}</li>
    );
    return (
        <ul className="ug-regular-repeating-ul">{listItems}</ul>
    );
  }

const UgBullet = () => {
    return (
        <section className="ug-regular-repeating-feature">
            <div className="ug-regular-repeating-feature-container">
                <div className="col-lg-12 col-md-12">
                    <h3 className="ug-regular-repeating-h3">
                        Instructions to Apply
                    </h3>
                    <ul className="ug-regular-repeating-ul">
                        <li className="ug-regular-repeating-list-elements">
                            Interested applicants must fill out the online application form through the UG{/* &nbsp;<a href="https://erp.lnmiit.ac.in/ugadm/" target="_blank" style="color: #d1252d;"></a>*/}admission portal.
                        </li>
                        <li className="ug-regular-repeating-list-elements">
                            Candidate has to pay a non-refundable and non-adjustable application fee of INR 2000/- (for female candidates the application fee is INR 1000/-).
                        </li>
                        <li className="ug-regular-repeating-list-elements">
                            Application Form other than online mode would not be accepted in any case.
                        </li>
                    </ul>
                    <h3 className="ug-regular-repeating-h3">
                        How to fill branch preferences?
                    </h3>
                    <ul className="ug-regular-repeating-ul">
                        <li className="ug-regular-repeating-list-elements">Please refer to this {/*<a href="files/Instructions to fill branch preferences.pdf" target="_blank" style="color: #d1252d;">(link of the document)</a> */} document for filling in branch preferences.</li>
                    </ul>
                    NumberList(props);
                </div>
            </div >
        </section >
    )
}

export default UgBullet