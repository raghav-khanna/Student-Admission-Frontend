import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./AllotmentStyle.css";


const Allotment = () => {
  //Paths
  const home = "/";
  const payFees = "/applicant/fees_payment";
  //Hooks
  const [alloted, setAlloted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [branch, setBranch] = useState("");
  const [waiting, setWaiting] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  
  //Variables
  const applicationId = location.state.id;
  const status = location.state.data[0].status;
  const pref_details = location.state.pref_details;
  const branches = [
    "Computer Science Engineering (CSE)",
    "Computer and Communication Engineering (CCE)",
    "Electronics and Communication Engineering (ECE)",
    "Mechanical and Mechatronics Engineering (MME)",
    "Dual Degree Computer Science Engineering (DCS)",
    "Dual Degree Electrical and Communication Engineering (DEC)",
  ];
  const branchMap = {
    CSE: "Computer Science Engineering (CSE)",
    CCE: "Computer and Communication Engineering (CCE)",
    ECE: "Electronics and Communication Engineering (ECE)",
    MME: "Mechanical and Mechatronics Engineering (MME)",
    DCS: "Dual Degree Computer Science Engineering (DCS)",
    DEC: "Dual Degree Electrical and Communication Engineering (DEC)",
  };

  /*
    if(status = 0) {1st Pref is the alloted one!}
    if(status = -1) {No Branch Alloted}
    else{
      if(status = x) branches [x-1];
    }
      CSE CCE ECE MME DCS DEC
    */
  // console.log(status[0].status);

  const getwait = (pref) => {
    let str = pref.slice(5, pref.length - 1);
    let b = parseInt(str);
    return b;
  };

  const getString = (pref) => {
    return pref.slice(1, 4);
  };

  useEffect(() => {
    if(status == 0){
      //Candidate got the First Pref!
      setAlloted(true);
      let branchCurr = getString(pref_details[0].unnest);
      setBranch(branchMap[branchCurr])
      setWaiting(getwait(pref_details[0].unnest))
    }
    else if(status == -1){
      //nothing
      //Disable Freeze Button
    }
    else{
      console.log(pref_details);
      setAlloted(true);
      setBranch(branches[status - 1]);
    }
  }, [])
  

  // if(status == 0) {
  //   console.log(pref_details)
  //   // if(pref_details.length === 0){
  //   //     alert("here");
  //   //     //setIsDropDisabled(true);
  //   //     navigate(home);
  //   // } 
  //   // else{
  //     // let branchCurr = getString(pref_details[0].unnest);
  //     // setBranch(branchMap[branchCurr]);
  //     // setAlloted(true);
  //     // setIsDisabled(false);
  //   // }

  // } else if (status != -1) {
  //   // setBranch(branches[status - 1]);
  //   // setAlloted(true);
  //   // setIsDisabled(false);
  // }

  const handleClick = (e) => {
    alert("You have been dropped out of the college! Refund process will start soon")
    const val = e.target.value;
    // console.log(`location state:- ${location.state}`)
    fetch(`/roundsEval`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { id: applicationId, value: val } }),
    }).then((res) => {
      console.log(res);
    });

    if (val == 3) { navigate(payFees); }
    else if(val == 0){ navigate(home); }

  };

  return (
    <div>
      <h1>Seat Allotment Process</h1>

      <div className="allotment-container">
        <div className="allotment-title">
          {alloted == true
            ? `Congratulations! You have been alloted the \n
              ${branch}
              The Waiting for your next Preference is - ${waiting}`
            : "You have not been alloted any branch yet"}
        </div>

        <Button
          variant="danger"
          size="lg"
          value={3}
          // disabled={isDisabled}
          onClick={handleClick}
        >
          Freeze
        </Button>
        <Button
          variant="danger"
          size="lg"
          value={2}
          // disabled={isDisabled}
          onClick={handleClick}
        >
          Hold
        </Button>
        <Button
          variant="danger"
          size="lg"
          value={1}
          // disabled={isDisabled}
          onClick={handleClick}
        >
          Float
        </Button>
        <Button variant="danger" size="lg" value={0} onClick={handleClick}>
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
