import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AdminHome = () => {
  
  // const [results, setResults] = useState();

  const handleRounds = () => {
    console.log("Handle Rounds Function!");
    fetch(`/administrator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log(res);
    });
  };

  const handleResults = () => {
    console.log("Handle Results Function!");
    fetch(`/administrator`).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <h1 className="m-3">Welcome to the Admin Home Page</h1>
      <h3 className="m-3">Click the Button to Simulate Rounds!</h3>
      <Button className="m-3" size="lg" variant="danger" onClick={handleRounds}>
        Simulate Rounds
      </Button>
      <Button className="m-3" size="lg" variant="danger" onClick={handleResults}>
        Get Results
      </Button>
      {/* {results} */}
    </div>
  );
};

export default AdminHome;
