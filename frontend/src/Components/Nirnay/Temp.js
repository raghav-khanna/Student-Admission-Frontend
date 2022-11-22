import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Temp.css";
import UgImpDates from '../UG/UgImpDates';
import UgBullet from "../UG/UgBullet";


const Temp = ({ x, arr, dataArray }) => {
    return (
        <section className="main-box">
            <div className="container-box">
                <UgImpDates x={x} arr={arr} />
                <UgBullet dataArray={dataArray} />
            </div>
        </section>
    )
}

export default Temp