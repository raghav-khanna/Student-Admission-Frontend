import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./LoginStyles.css";

const PersonalDetails = () => {
  return (
    <div>
      <Form className="details-form">
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Middle Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Middle Name"
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

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PersonalDetails;
