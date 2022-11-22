import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useRef } from "react";
import "./LoginStyles.css";

import { Personaldetails } from "../../Classes/Personaldetails";

const a = new Personaldetails();
const PersonalDetails = () => {
  const [progress, setProgress] = useOutletContext();
  const firstName = useRef(null);
  const middleName = useRef(null);
  const lastName = useRef(null);
  const fatherName = useRef(null);
  const address_1 = useRef(null);
  const address_2 = useRef(null);
  const pin = useRef(null);
  const navigate = useNavigate();

  const nextPage = "/applicant/first_login/2";

  const handleSubmit = () => {
    // fetch(`/for_store?fname=${firstName.current.value}&mname=${middleName.current.value}`)
    setProgress(progress + 20);
    navigate(nextPage);
    a.id = 0; //need to assign
    a.first_name = firstName.current.value;
    a.middle_name = middleName.current.value;
    a.last_name = lastName.current.value;
    a.father_name = fatherName.current.value;
    a.address1 = address_1.current.value;
    a.address2 = address_2.current.value;
    a.zip = pin.current.value;
    console.log(a);
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
              ref={fatherName}
              size="lg"
              placeholder="Please Enter your Father's Full Name"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              ref={address_1}
              size="lg"
              placeholder="House/Flat No., Street, Landmark"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control ref={address_2} size="lg" placeholder="City, State" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              ref={pin}
              size="lg"
              placeholder="Please Enter your PINCODE"
            />
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
