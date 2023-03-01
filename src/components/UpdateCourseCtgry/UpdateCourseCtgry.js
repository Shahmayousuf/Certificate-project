import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import "./UpdateCourseCtgry.css";
import Layout from "../../Pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateCourseCtgryApi,
  SingleCatgryApi,
} from "../../Store/CatogrySlice";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateCourseCtgry = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState();
  console.log(data);
  
  const { singlecatory } = useSelector((state) => ({
    singlecatory: state.catogry.singlecatory,
  }));
  console.log(singlecatory);

 

  useEffect(() => {
    setData(singlecatory);
  }, []);
  useEffect(() => {
    dispatch(SingleCatgryApi( id ));
  }, []);
  const handleUpdates = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const id = params.id;
  const handleUpadateSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateCourseCtgryApi({ id, navigate, data }));
  };
  return (
    <div>
      <Layout>
        <div className="updatecrsctgry">
          <h5>UPDATE COUESE CATOGORY</h5>

          <div className="upddatecrsctgry-container p-4">
            <Row>
              <Col md="6">
                <Form onSubmit={handleUpadateSubmit}>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label> Course Catogory name: </Form.Label>
                    <Form.Control
                      onChange={(e) => handleUpdates(e)}
                      type="string"
                      value={data?.course_category_name}
                      style={{ background: "rgba(128, 128, 128, 0.51)" }}
                      name="course_category_name"
                    />
                  </Form.Group>
                           
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Designation:</Form.Label>
                    <Form.Control
                      onChange={(e) => handleUpdates(e)}
                      type="string"
                      style={{ background: "rgba(128, 128, 128, 0.51)" }}
                      name="designation"
                      value={data?.designation}
                    />
                  </Form.Group>

                  <div className="btns  ">
                    <Link to={"/coursecatogory"}>
                      <Button
                        style={{
                          background: "#8080807a",
                          color: "black",
                          border: "none",
                        }}
                      >
                        Back
                      </Button>{" "}
                    </Link>
                    <Button
                      type="submit"
                      style={{ background: "#434141", border: "none" }}
                    >
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
  );
};

export default UpdateCourseCtgry;
