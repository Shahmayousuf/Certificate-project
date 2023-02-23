import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./CreateCourseCtgry.css";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Layout from "../../Pages/Layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateCourseCatgryApi } from "../../Store/CatogrySlice";
import{Link}from 'react-router-dom'

const CreateCourseCtgry = () => {

 const [data,setData]=useState({})
    console.log(data);
   const dispatch=useDispatch()
   const navigate=useNavigate()

 const  handleCatgry=(e)=>{
     setData({...data,[e.target.name]:e.target.value})
 };
  const handleSubmitCatgry = (e) => {
     e.preventDefault();
     dispatch(CreateCourseCatgryApi({data,navigate}))
  };

 
  return (
    <div>
        <Layout>
      <div className="createcoursectgry">
        <h5>CREATE COURSE CATOGORY</h5>

        <div className="createcrsctgry-container p-4">
          <Row>
            <Col md="6">
              <Form onSubmit={handleSubmitCatgry}> 
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label> Course Catogory Name:</Form.Label>
                  <Form.Control onChange={(e) => handleCatgry(e)}
                  name='course_category_name'
                    type="string"
                    style={{ background: "rgba(128, 128, 128, 0.51)" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Label>Designation:</Form.Label>
                  <Form.Control onChange={(e) => handleCatgry(e)}
                       name="designation"
                       
                    type="string"
                    style={{ background: "rgba(128, 128, 128, 0.51)" }}
                  />
                </Form.Group>

                <div className="btns  ">
                  <Link to={'/coursecatogory'}>
                  <Button
                    style={{
                      background: "#8080807a",
                      color: "black",
                      border: "none",
                    }}
                  >
                    Back
                  </Button></Link>
                  <Button type='submit' style={{ background: "#434141", border: "none" }}>
                    Create
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default CreateCourseCtgry;
