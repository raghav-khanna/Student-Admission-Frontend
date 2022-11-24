import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./LoginStyles.css";

const FirstTimeLogin = () => {
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState({});

  return (
    <div>
      <h1 className="login-title">Please Fill Your Details</h1>
      <div className="first-login-form-container">
        <ProgressBar
          className="form-progress"
          now={progress}
          label={`${progress}%`}
          variant="danger"
          visuallyHidden
        />
        <Outlet
          context={[
            [progress, setProgress],
            [formData, setFormData],
          ]}
        />
      </div>
    </div>
  );
};

export default FirstTimeLogin;
