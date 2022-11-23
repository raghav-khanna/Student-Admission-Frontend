import { React } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
import { useRef } from "react";
import "./LoginStyles.css";

import { Academicdetails } from "../../Classes/Academicdetails";

const AcademicDetails = () => {
  const [[progress, setProgress], [formData, setFormData]] = useOutletContext();
  const navigate = useNavigate();

  //Use Ref Hooks
  const board10 = useRef(null);
  const percentage10 = useRef(null);
  const yop10 = useRef(null);
  const rollno10 = useRef(null);
  const board12 = useRef(null);
  const percentage12 = useRef(null);
  const yop12 = useRef(null);
  const rollno12 = useRef(null);
  const app_no = useRef(null);
  const rank = useRef(null);
  //

  const nextPage = "/applicant/first_login/3";
  const d = new Academicdetails();

  const handleSubmit = () => {
    setProgress(progress + 20);

    //Use Ref Hooks
    d.id = 0; //need to assign
    d.board_10 = board10.current.value;
    d.percentage_10 = percentage10.current.value;
    d.yop_10 = yop10.current.value;
    d.rollno_10 = rollno10.current.value;
    d.board_12 = board12.current.value;
    d.percentage_12 = percentage12.current.value;
    d.yop_12 = yop12.current.value;
    d.rollno_12 = rollno12.current.value;
    d.application_no = app_no.current.value;
    d.mains_rank = rank.current.value;
    //

    setFormData({ ...formData, d });
    console.log(formData);
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
            <Form.Select
              required
              ref={board10}
              size="lg"
              defaultValue="Choose..."
            >
              <option value="">Choose...</option>
              <option>CBSE</option>
              <option>ISC</option>
              <option>Maharashtra Board</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>CGPA/Percentage</Form.Label>
            <Form.Control
              required
              ref={percentage10}
              size="lg"
              type="number"
              placeholder="Enter your 10th Marks"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Year of Passing</Form.Label>
            <Form.Control
              required
              ref={yop10}
              size="lg"
              type="number"
              min={"2000"}
              placeholder="Enter your year of Passing"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>10th Roll No.</Form.Label>
            <Form.Control
              required
              ref={rollno10}
              size="lg"
              type="number"
              pattern="[0-9]{7}"
              placeholder="Enter your 10th class roll number"
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>12th Board</Form.Label>
            <Form.Select
              required
              ref={board12}
              size="lg"
              defaultValue="Choose..."
            >
              <option value="">Choose...</option>
              <option>CBSE</option>
              <option>ISC</option>
              <option>Maharashtra Board</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Percentage</Form.Label>
            <Form.Control
              required
              ref={percentage12}
              size="lg"
              type="number"
              placeholder="Enter your 12th Marks"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Year of Passing</Form.Label>
            <Form.Control
              required
              ref={yop12}
              size="lg"
              type="number"
              min={"2000"}
              placeholder="Enter your year of Passing"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>12th Roll No.</Form.Label>
            <Form.Control
              required
              ref={rollno12}
              size="lg"
              type="number"
              pattern="[0-9]{7}"
              placeholder="Enter your 12th class roll number"
            />
          </Form.Group>
        </Row>

        <Row className="mb-5">
          <Form.Group as={Col}>
            <Form.Label>JEE Mains Application Number</Form.Label>
            <Form.Control
              required
              ref={app_no}
              size="lg"
              type="number"
              pattern="[0-9]{12}"
              placeholder="Enter your JEE Application Number"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>JEE Mains Rank</Form.Label>
            <Form.Control
              required
              ref={rank}
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
