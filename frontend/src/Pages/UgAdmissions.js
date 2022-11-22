import React from 'react';
import Footer from '../Components/Nirnay/Footer';
import InstituteGlance from '../Components/Prateek/InstituteGlance';
import UgProgrammes from '../Components/UG/UgProgrammes';
import UgHighlight from '../Components/UG/UgHighlight';
import UgModes from '../Components/UG/UgModes';
import UgHead from '../Components/UG/UgHead';
import UgScholarship from '../Components/UG/UgScholarship';

const UgAdmissions = () => {
  return (
    <div>
      <UgModes />
      <UgHead />
      <UgProgrammes />
      <UgHighlight />
      <InstituteGlance />
      <UgScholarship />
      <Footer />
    </div>
  )
}

export default UgAdmissions;
