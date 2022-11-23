import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();

  const nextPage = "/applicant/home";

  const handleClick = () => {
    fetch(`/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    });
    console.log("Data -> " + formData.p.dsp);

    navigate(nextPage);
  };

  return (
    <div>
      <h1>You've Successfully submitted your details</h1>

      <Button size="lg" variant="danger" onClick={handleClick}>
        Go to Home
      </Button>
    </div>
  );
};

export default Successful;
