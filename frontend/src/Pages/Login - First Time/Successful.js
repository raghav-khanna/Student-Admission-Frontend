import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const [isConfirm, setIsConfirm] = useState(false);
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  const nextPage = "/login";

  const handleClick = () => {
    fetch(`/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    }).then((res) => {
      console.log(res);
    });

    setIsConfirm(true);
  };

  return (
    <div>
      <h1>{isConfirm && "You've Successfully submitted your details"}</h1>
      <h1>
        {!isConfirm &&
          "Do you confirm all the details, you've entered, are correct?"}
      </h1>

      {isConfirm && (
        <Button
          size="lg"
          variant="danger"
          onClick={() => {
            navigate(nextPage);
          }}
        >
          Go to Home
        </Button>
      )}

      {!isConfirm && (
        <Button size="lg" variant="danger" onClick={handleClick}>
          Accept
        </Button>
      )}
    </div>
  );
};

export default Successful;
