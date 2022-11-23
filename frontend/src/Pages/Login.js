import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useRef } from "react";

import "./styles.css";
// import SignUp from "./SignUpPage";





const Login = ({isAdmin = false}) => {

  const applicant_id = useRef(null)
  const applicant_password = useRef(null)
  return (
    <div>
      <div className="login-container">
        <div className="login-title">
          {!isAdmin ? "Welcome to the Login Page" : ""}
        </div>
        <div className="login-form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>{!isAdmin ? "Applicant Id" : "Admin Id"}</Form.Label>
              <Form.Control
                required
                ref = {applicant_id}
                size="lg"
                type="text"
                placeholder="Enter your Id"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref = {applicant_password}
                size="lg"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button className="mb-3" size="lg" variant="danger" type="submit">
              Login
            </Button>
            <br />
            New User?
            <br />
            <Link to={!isAdmin ? "/signup" : "#"}>
              <Button
                className="mb-3"
                size="lg"
                variant="outline-danger"
                type="submit"
              >
                {!isAdmin ? "Sign Up" : "Contact Admin"}
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
