import React from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  const nextPage = "/applicant/home";

  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div>
      <h1>You've Successfully submitted your details</h1>

      <Button size="lg" variant="danger" type="submit" onClick={handleClick}>
        Go to Home
      </Button>
    </div>
  );
};

export default Successful;
