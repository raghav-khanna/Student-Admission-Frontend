import React from 'react';
import Footer from '../Components/Nirnay/Footer';
import InstituteGlance from '../Components/Prateek/InstituteGlance';
import UgProgrammes from '../Components/Prateek/UgProgrammes';
import UgHighlight from '../Components/Prateek/UgHighlight';
import UgModes from '../Components/Nirnay/UgModes';
import UgHead from '../Components/Nirnay/UgHead';

const UgAdmissions = () => {
    return (
        <div>
            <UgModes />
            <UgHead />
            <UgProgrammes />
            <UgHighlight />
            <InstituteGlance />
            <Footer />
        </div>
    )
}

export default UgAdmissions;