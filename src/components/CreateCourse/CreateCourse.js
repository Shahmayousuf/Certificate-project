import React, { useEffect, useState } from "react";
import "./CreateCourse.css";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Layout from "../../Pages/Layout";
import { Link, useNavigate } from "react-router-dom";
import { CreateCourseApi } from "../../Store/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
import { CatogryApi } from "../../Store/CatogrySlice"; 


const CreateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setdata] = useState();

  console.log(data);
  
  const handleCourse = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handlesubmitcourse = (e) => {
    e.preventDefault();
    dispatch(CreateCourseApi({ data, navigate }));
  };
  const { allcatogrys } = useSelector((state) => ({
    allcatogrys: state.catogry.allcatogrys,
  }));
  // const allcatogrydata = allcatogrys.results;
  // console.log(allcatogrydata); 

  const coursecatogry = allcatogrys.results;
  console.log(coursecatogry);
  useEffect(()=>{
    dispatch(CatogryApi())
  },[])
        
  return (
    <div>
      <Layout>
        <div className="createcourse p ">
          <h5>CREATE COURSE</h5>
          <div className="createcourse-container p-4">
            <Row>
              <Col lg="6">
                <Form onSubmit={handlesubmitcourse}>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Course Name:</Form.Label>
                    <Form.Control
                      onChange={(e) => handleCourse(e)}
                      type="text"
                      name="course_name"
                      style={{ background: "rgba(128, 128, 128, 0.51)" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      onChange={(e) => handleCourse(e)}
                      type="number"
                      name="duration"
                      style={{ background: "rgba(128, 128, 128, 0.51)" }}
                    />
                  </Form.Group>
                  <p>Course Catogry name</p>
                  <select
                    style={{
                      display: "block",
                      padding: "5px",
                      margin: "8px",
                      width: "100%",
                    }}
                    name="course_category"
                    id=""
                    onChange={(e) => handleCourse(e)}
                      >
                    {map(coursecatogry,(item) => (
                      <option value={item.id} key={item.id}>
                        {item.course_category_name}
                      </option>
                    ))}
                  </select>
                            
                  <div className="btns ">
                    <Link to={"/course"}>
                      <Button
                        style={{
                          background: "#8080807a",
                          color: "black",
                          border: "none",
                        }}
                      >
                        Back
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      style={{ background: "#434141", border: "none" }}
                    >
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

export default CreateCourse;
