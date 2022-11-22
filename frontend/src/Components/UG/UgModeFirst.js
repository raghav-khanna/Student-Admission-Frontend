import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./UgModeFirst.css";
import UgImpDates from './UgImpDates';

const UgModeFirst = () => {
    return (
        <section className="ug-mode-first">
            <div className="ug-mode-first-container">
                <div className="ug-mode-first-title">
                    <h2 className="ug-mode-first-title-h2">
                        TITLE
                    </h2>
                </div>
                <UgImpDates />
            </div>
        </section>
    )
}

export default UgModeFirst