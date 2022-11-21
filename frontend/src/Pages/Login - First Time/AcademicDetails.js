import { React } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginStyles.css";

const AcademicDetails = () => {
  const [progress, setProgress] = useOutletContext();
  const navigate = useNavigate();

  const nextPage = "/applicant/first_login/3";

  const handleSubmit = () => {
    setProgress(progress + 20);
    navigate(nextPage);
  };

  return (
    <div>
      <Form className="details-form" onSubmit={handleSubmit}>
        <h1>Enter Your Academic Details</h1>
        <br />
        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>10th Board</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>CBSE</option>
              <option>ISC</option>
              <option>Maharashtra Board</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>CGPA/Percentage</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              placeholder="Enter your 10th Marks"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Year of Passing</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              min={"2000"}
              placeholder="Enter your year of Passing"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>10th Roll No.</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              pattern="[0-9]{7}"
              placeholder="Enter your year of Passing"
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>12th Board</Form.Label>
            <Form.Select size="lg" defaultValue="Choose...">
              <option>Choose...</option>
              <option>CBSE</option>
              <option>ISC</option>
              <option>Maharashtra Board</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Percentage</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              placeholder="Enter your 12th Marks"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Year of Passing</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              min={"2000"}
              placeholder="Enter your year of Passing"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>12th Roll No.</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              pattern="[0-9]{7}"
              placeholder="Enter your year of Passing"
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>JEE Mains Application Number</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              pattern="[0-9]{12}"
              placeholder="Enter your JEE Application Number"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>JEE Mains Rank</Form.Label>
            <Form.Control
              size="lg"
              type="number"
              placeholder="Enter your JEE Mains Rank"
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

export default AcademicDetails;
