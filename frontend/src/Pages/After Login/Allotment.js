import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./AllotmentStyle.css";

const Allotment = () => {
  let alloted = true;
  let isDisabled = false;
  const home = "/";
  const navigate = useNavigate();
  const [disabledList, setDisabledList] = useState({});
  const location = useLocation();
  const applicationId = location.state.id;
  const data = location.state.data;
  const [branch, setBranch] = useState(
    "Electrical and Communication Engineering (ECE) "
  );
  const [waiting, setWaiting] = useState("100");

  const branches = [
    "Computer Science Engineering (CSE)",
    "Computer and Communication Engineering (CCE)",
    "Electronics and Communication Engineering (ECE)",
    "Mechanical and Mechatronics Engineering (MME)",
    "Dual Degree Computer Science Engineering (DCS)",
    "Dual Degree Electrical and Communication Engineering (DEC)",
  ];

  /*
    if(status = 0) {1st Pref is the alloted one!}
    if(status = -1) {No Branch Alloted}
    else{
      if(status = x) branches [x-1];
    }
      CSE CCE ECE MME DCS DEC
    */
  console.log("Hellow Data -> " + data.prefs);

  const getwait = (pref) => {
    let str = pref.slice(5, pref.length - 1);
    let b = parseInt(str);
    return b;
  };

  const getstring = (pref) => {
    return pref.slice(1, 4);
  };

  if (data.status === 0) {
    setBranch();
  }

  /*



    */

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
          {alloted === true
            ? "Congratulations! You have been alloted the " +
              <br /> +
              { branch } +
              "The Waiting for your next Preference is - " +
              { waiting }
            : "You have not been alloted any branch yet. The waiting for your next preference is - " +
              { waiting }}
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
      <Button
        className="m-3"
        size="lg"
        variant="danger"
        onClick={() => {
          navigate(home);
        }}
      >
        Log-out
      </Button>
    </div>
  );
};

export default Allotment;
