import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginStyles.css";

const LoginComponent = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-title">Welcome to the Login Page</div>
        <div className="login-form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Applicant Id</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Applicant Id"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Login
            </Button>
            <br />
            New User?
            <br />
            <Link to={"/signup"}>
              <Button
                className="mb-3"
                size="lg"
                variant="outline-danger"
                type="submit"
              >
                Sign Up
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
