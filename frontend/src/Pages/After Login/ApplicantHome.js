import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ApplicantHome = () => {
  const allotement = "/applicant/allotment";
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.pref_details);

  const handleClick = () => {
    navigate(allotement, { state: location.state });
  };

  return (
    <div>
      <h1>Welcome to the Home Page of the Applicant!</h1>
      <Button
        className="m-3"
        size={"lg"}
        variant={"danger"}
        onClick={handleClick}
      >
        Go to Allotment Page
      </Button>
    </div>
  );
};

export default ApplicantHome;
