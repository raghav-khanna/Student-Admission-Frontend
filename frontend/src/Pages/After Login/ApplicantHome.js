import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";


const ApplicantHome = () => {
  const allotement = "/applicant/allotment";
  const home = "/";
  const navigate = useNavigate();
  const location = useLocation();
  const status = location.state.data[0].status;
  const pref_details = location.state.pref_details;

  console.log(location.state.pref_details);

  const handleClick = () => {
    if(status === 0 && pref_details.length === 0){
      alert("Sorry, but you're already out of the process");
      navigate(home)
    }else{
      navigate(allotement, { state: location.state });
    }
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
