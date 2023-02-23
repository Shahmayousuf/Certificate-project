import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import './UpdateCourseCtgry.css'
import Layout from '../../Pages/Layout';

const UpdateCourseCtgry = () => {
  return (
    <div>
        <Layout>
      <div className='updatecrsctgry'>
        <h5>UPDATE COUESE CATOGORY</h5>
      
      <div className='upddatecrsctgry-container p-4'>
      <Row>
            <Col md="6">
              <Form>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label> Course Catogory:</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ background: "rgba(128, 128, 128, 0.51)" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label>Designation:</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ background: "rgba(128, 128, 128, 0.51)" }}
                  />
                </Form.Group>

                <div className="btns  ">
                  <Button
                    style={{
                      background: "#8080807a",
                      color: "black",
                      border: "none",
                    }}
                  >
                    Back
                  </Button>{" "}
                  <Button style={{ background: "#434141", border: "none" }}>
                    Update
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
      </div>
      </div>
      </Layout>
    </div>
  )
}

export default UpdateCourseCtgry
