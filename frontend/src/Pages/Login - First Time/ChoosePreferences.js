import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginStyles.css";

const ChoosePreferences = () => {
  const [progress, setProgress] = useOutletContext();
  const navigate = useNavigate();

  const nextPage = "/applicant/first_login/success";

  const handleSubmit = () => {
    setProgress(progress + 20);

    navigate(nextPage);
  };

  return (
    <div>
      <Form className="details-form" onSubmit={handleSubmit}>
        <h1>Enter Your Academic Details</h1>
        <br />
        <Row className="mb-3">
          <Form.Group className="mb-5">
            <Form.Label>Preference - 1</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Computer Science Engineering (CSE) </option>
              <option>Computer and Communication Engineering (CCE) </option>
              <option>Electrical and Communication Engineering (ECE) </option>
              <option>Mechanical and Mechatronics Engineering (MME) </option>
              <option>Dual Degree Computer Science Engineering (DCS) </option>
              <option>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 2</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Computer Science Engineering (CSE) </option>
              <option>Computer and Communication Engineering (CCE) </option>
              <option>Electrical and Communication Engineering (ECE) </option>
              <option>Mechanical and Mechatronics Engineering (MME) </option>
              <option>Dual Degree Computer Science Engineering (DCS) </option>
              <option>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 3</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Computer Science Engineering (CSE) </option>
              <option>Computer and Communication Engineering (CCE) </option>
              <option>Electrical and Communication Engineering (ECE) </option>
              <option>Mechanical and Mechatronics Engineering (MME) </option>
              <option>Dual Degree Computer Science Engineering (DCS) </option>
              <option>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 4</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Computer Science Engineering (CSE) </option>
              <option>Computer and Communication Engineering (CCE) </option>
              <option>Electrical and Communication Engineering (ECE) </option>
              <option>Mechanical and Mechatronics Engineering (MME) </option>
              <option>Dual Degree Computer Science Engineering (DCS) </option>
              <option>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 5</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Computer Science Engineering (CSE) </option>
              <option>Computer and Communication Engineering (CCE) </option>
              <option>Electrical and Communication Engineering (ECE) </option>
              <option>Mechanical and Mechatronics Engineering (MME) </option>
              <option>Dual Degree Computer Science Engineering (DCS) </option>
              <option>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Preference - 6</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Computer Science Engineering (CSE) </option>
              <option>Computer and Communication Engineering (CCE) </option>
              <option>Electrical and Communication Engineering (ECE) </option>
              <option>Mechanical and Mechatronics Engineering (MME) </option>
              <option>Dual Degree Computer Science Engineering (DCS) </option>
              <option>
                Dual Degree Electrical and Communication Engineering (DEC)
              </option>
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
