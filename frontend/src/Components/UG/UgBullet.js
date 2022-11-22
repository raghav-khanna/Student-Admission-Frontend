import React from "react";
import "./UgBullet.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UgBullet = ({ bulletHeading = "Instructions to Apply", listArray = ["ABCD", "EFGH"] }) => {
    const arr1head = [["Note:", ["sent1", "sent2"]]["Eligibility Criteria", ["sent3", "sent4"]]];
    let list = [];
    let temp = [];

    return (
        <section className="ug-regular-repeating-feature">
            <div className="ug-regular-repeating-feature-container">
                <div className="col-lg-12 col-md-12">
                    <h3 className="ug-regular-repeating-h3">
                        {bulletHeading}
                    </h3>
                    <ul className="ug-regular-repeating-ul">
                        {list}
                        {
                            listArray.forEach((value, index) => {
                                list.push((<li key={index} className="ug-regular-repeating-list-elements">
                                    {value}
                                </li>));
                            })}
                    </ul>
                    {temp}
                    {
                        arr1head.forEach((value, index) => {
                            temp.push(
                                <div>
                                    <h3 className="ug-regular-repeating-h3">
                                        {value[0]}
                                    </h3>
                                    <ul className="ug-regular-repeating-ul">
                                        value[1].forEach((item) => {

                                        })
                                    </ul>;
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </section >
    )
}

export default UgBullet;
