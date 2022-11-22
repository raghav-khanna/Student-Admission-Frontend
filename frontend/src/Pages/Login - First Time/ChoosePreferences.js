import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginStyles.css";
import { Preference } from "../../Classes/Preference";

const ChoosePreferences = () => {
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useOutletContext();
  let pref_array = useRef(["null", "null", "null", "null", "null", "null"]);
  const navigate = useNavigate();

  const error = "All the Preferences must be filled in order!";
  const nextPage = "/applicant/first_login/success";
  let flag = false;

  const p = new Preference();

  const getbranch = (pref) => {
    return pref.slice(pref.length - 4, pref.length - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(progress + 20);

    pref_array.current.map((pref) => {
      if (pref.value !== "" && flag) {
        setIsError(true);
      }
      pref.value === "" ? (flag = true) : (flag = false);
      console.log(flag + " -> " + isError);
    });

    // if (!isError) {
    //   navigate(nextPage);
    // }
  };

  return (
    <div>
      <Form className="details-form" onSubmit={handleSubmit}>
        <h1>Enter Your Academic Details</h1>
        <br />
        <Row className="mb-3">
          <div className="error">{isError ? error : ""}</div>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 1</Form.Label>
            <Form.Select
              ref={(e) => {
                pref_array.current[0] = e;
              }}
              size="lg"
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"CSE"}>Computer Science Engineering (CSE) </option>
              <option value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 2</Form.Label>
            <Form.Select
              ref={(e) => {
                pref_array.current[1] = e;
              }}
              size="lg"
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"CSE"}>Computer Science Engineering (CSE) </option>
              <option value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>{" "}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 3</Form.Label>
            <Form.Select
              ref={(e) => {
                pref_array.current[2] = e;
              }}
              size="lg"
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"CSE"}>Computer Science Engineering (CSE) </option>
              <option value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>{" "}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 4</Form.Label>
            <Form.Select
              ref={(e) => {
                pref_array.current[3] = e;
              }}
              size="lg"
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"CSE"}>Computer Science Engineering (CSE) </option>
              <option value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>{" "}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 5</Form.Label>
            <Form.Select
              ref={(e) => {
                pref_array.current[4] = e;
              }}
              size="lg"
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"CSE"}>Computer Science Engineering (CSE) </option>
              <option value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>{" "}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 6</Form.Label>
            <Form.Select
              ref={(e) => {
                pref_array.current[5] = e;
              }}
              size="lg"
              defaultValue="Choose..."
            >
              <option value={""}>Choose...</option>
              <option value={"CSE"}>Computer Science Engineering (CSE) </option>
              <option value={"CCE"}>
                Computer and Communication Engineering (CCE){" "}
              </option>
              <option value={"ECE"}>
                Electrical and Communication Engineering (ECE){" "}
              </option>
              <option value={"MME"}>
                Mechanical and Mechatronics Engineering (MME){" "}
              </option>
              <option value={"DCS"}>
                Dual Degree Computer Science Engineering (DCS){" "}
              </option>
              <option value={"DEC"}>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>{" "}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button size="lg" variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChoosePreferences;
