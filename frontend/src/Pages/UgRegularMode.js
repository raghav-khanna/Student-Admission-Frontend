import React from "react";
import UgModes from "../Components/UG/UgModes";
import UgModeFirst from "../Components/UG/UgModeFirst";
import RegularModeImpDates from "../Components/Prateek/Tables/Ug-Tables/UgRegularModeTables/RegularModeImpDates";
import UgImpDates from "../Components/UG/UgImpDates";
import RegularModeProgrammesOffered from "../Components/Prateek/Tables/Ug-Tables/UgRegularModeTables/RegularModeProgrammesOffered";
import UgBullet from "../Components/UG/UgBullet";
import TempData from "../Components/Nirnay/TempData";
import Temp from "../Components/Nirnay/Temp";

const UgRegularMode = () => {
  return (
    <div>
      <UgModes />
      <UgModeFirst title1={"REGULAR MODE"} title2={"IMPORTANT DATES"} dataArray={RegularModeImpDates} />
      {/* <UgImpDates x={"UG Programmes Offered and Available Seats"} arr={RegularModeProgrammesOffered} />
      <UgBullet dataArray={TempData} /> */}
      <Temp x={"UG Programmes Offered and Available Seats"} arr={RegularModeProgrammesOffered} dataArray={TempData} />
    </div>
  );
};

export default UgRegularMode;
