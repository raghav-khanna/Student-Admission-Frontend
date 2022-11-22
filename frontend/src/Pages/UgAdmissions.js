import React from "react";
import Footer from "../Components/Nirnay/Footer";
import InstituteGlance from "../Components/Prateek/InstituteGlance";
import UgProgrammes from "../Components/UG/UgProgrammes";
import UgHighlight from "../Components/UG/UgHighlight";
import UgModes from "../Components/UG/UgModes";
import UgHead from "../Components/UG/UgHead";

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
  );
};

export default UgAdmissions;
