import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useRef } from "react";
import "./LoginStyles.css";


const PersonalDetails = () => {
  const [progress, setProgress] = useOutletContext();
  const navigate = useNavigate();

  const firstName = useRef(null);
  const middleName = useRef(null);
  const lastName = useRef(null);


  const nextPage = "/applicant/first_login/2";

  const handleSubmit = () => {
    fetch(`/for_store?fname=${firstName.current.value}&mname=${middleName.current.value}`)
    setProgress(progress + 20);
    navigate(nextPage);
    console.log(firstName.current.value, middleName.current.value, lastName.current.value)
  };



  return (
    <div>
      <Form className="details-form" onSubmit={handleSubmit}>
        <h1>Enter Your Personal Details</h1>
        <br />
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              ref={firstName}
              size="lg"
              type="text"
              placeholder="Enter Your First Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              ref={middleName}
              size="lg"
              type="text"
              placeholder="Enter Your Middle Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              ref={lastName}
              size="lg"
              type="text"
              placeholder="Enter Your Middle Name"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Father Full Name</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Please Enter your Father's Full Name"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              size="lg"
              placeholder="House/Flat No., Street, Landmark"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control size="lg" placeholder="City, State" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control size="lg" />
          </Form.Group>
        </Row>
        <Button size="lg" variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PersonalDetails;
