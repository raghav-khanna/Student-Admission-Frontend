import React from "react";
import Button from "react-bootstrap/Button";

const AdminHome = () => {
  const handleRounds = () => {
    console.log("Handle Rounds Function!");
  };

  return (
    <div>
      <h1 className="m-3">Welcome to the Admin Home Page</h1>
      <h3 className="m-3">Click the Button to Simulate Rounds!</h3>
      <Button className="m-3" size="lg" variant="danger" onClick={handleRounds}>
        Simulate Rounds
      </Button>
    </div>
  );
};

export default AdminHome;
