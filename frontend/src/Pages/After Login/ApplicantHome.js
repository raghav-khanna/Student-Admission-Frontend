import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ApplicantHome = () => {
  return (
    <div>
      <h1>Welcome to the Home Page of the Applicant!</h1>
      <Link to={"/applicant/allotment"}>
        <Button className="m-3" size={"lg"} variant={"danger"}>
          Go to Allotment Page
        </Button>
      </Link>
    </div>
  );
};

export default ApplicantHome;
