import React from 'react';
import Footer from '../Components/Nirnay/Footer';
import InstituteGlance from '../Components/Prateek/InstituteGlance';
import UG_Highlight_section from '../Components/Prateek/UG_Highlight_section';
import UG_Programmes from '../Components/Prateek/UG_Programmes';

const UG_Admissions = () => {
    return (
        <div>
            <UG_Programmes />
            <UG_Highlight_section />
            <InstituteGlance />
            <Footer />
        </div>
    )
}

export default UG_Admissions;