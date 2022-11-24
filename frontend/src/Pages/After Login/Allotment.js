import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AllotmentStyle.css";

const Allotment = () => {
  let alloted = true;
  const navigate = useNavigate();
  const home = "/";
  const [disabledList, setDisabledList] = useState({});
  let isDisabled = false;

  let branch = "Electronics and Communication Engineering (ECE)";
  let waiting = 120;

  let congratsMsg =
    "Congratulations! You have been alloted the " +
    branch +
    ". The Waiting for your next preference is - " +
    waiting;
  let sadMsg =
    "You have not been alloted any branch yet. The waiting for your next preference is - " +
    waiting;

  return (
    <div>
      <h1>Seat Allotment Process</h1>

      <div className="allotment-container">
        <div className="allotment-title">
          {alloted === true ? congratsMsg : sadMsg}
        </div>

        <Button variant="danger" size="lg">
          Freeze
        </Button>
        <Button variant="danger" size="lg">
          Hold
        </Button>
        <Button variant="danger" size="lg">
          Float
        </Button>
        <Button variant="danger" size="lg" disabled={isDisabled}>
          Drop
        </Button>
      </div>
      <Button className="m-3" size="lg" variant="danger" onClick={() => {
        navigate(home);
      }}>Log-out</Button>
    </div>
  );
};

export default Allotment;
