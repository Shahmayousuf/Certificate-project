import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "../components/LoginPage/Login";
import Layout from "./Layout";
const LoginPage = () => {
  return (
    <div>
    
      <Row>
        <Col lg="12">
          <Login />
        </Col>
      </Row>
      
    </div>
  );
};

export default LoginPage;
