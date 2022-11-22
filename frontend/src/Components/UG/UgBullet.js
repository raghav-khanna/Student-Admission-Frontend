import React from "react";
import "./UgBullet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UgBulletCard from "./UgBulletCard";

const UgBullet = (props) => {

    const card = [];

    props.dataArray.map((val, key) => {
        card.push(<UgBulletCard header={val.h} list={val.x} />)
    });


    return (
        <section className="ug-regular-repeating-feature">
            <div className="ug-regular-repeating-feature-container">
                {card}
            </div >
        </section >
    )
}

export default UgBullet;
