import React from "react";
import { Row ,Col} from "react-bootstrap";
import Students from "../components/StudentsPage/Students";

const StudentsPage = () => {
  return (
    <div>
      <Row>
        <Col lg="12" md='12'>
          <Students />
        </Col>
      </Row>
    </div>
  );
};

export default StudentsPage;
