import React from "react";
import Footer from "../Components/Nirnay/Footer";
import InstituteGlance from "../Components/Prateek/InstituteGlance";
import UgProgrammes from "../Components/Prateek/UgProgrammes";
import UgHighlight from "../Components/Prateek/UgHighlight";

const UgAdmissions = () => {
  return (
    <div>
      <UgProgrammes />
      <UgHighlight />
      <InstituteGlance />
      <Footer />
    </div>
  );
};

export default UgAdmissions;
