import React, { useEffect } from "react";
import "./Courses.css";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Layout from "../../Pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import { CourseApi } from "../../Store/CourseSlice";
import { map } from "lodash";
import { Link } from "react-router-dom";



const Courses = () => {
  const dispatch = useDispatch();
  const { allcourses } = useSelector((state) => ({
    allcourses: state.courses.allcourses,
  }));
  console.log(allcourses);
  useEffect(() => {
    dispatch(CourseApi());
  }, []);
  const allcoursedata = allcourses.results;
  console.log(allcoursedata);
  return (
    <div>
      <Layout>
        <div className="Coursesbanner">
          <h5>COURSES</h5>
          <div className="CourseContainer" style={{ overflowX: "auto" }}>
            <Row>
              <Col lg="12">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ID</th>
                      <th>Course Name</th>
                      <th>Duration</th>
                      <th> Course Catogory</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    {map(allcoursedata, (item) => (
                      <tr>
                        <td>
                          <input type="checkbox"></input>
                        </td>
                        <td>{item.id}</td>
                        <td>{item.course_name}</td>
                        <td>{item.duration}</td>
                        <td>{item.course_category}</td>
                        <td>
                          <Link to={"/updatecourse"}>
                            <BiPencil style={{ color: "blue" }} />{" "}
                          </Link>
                          <BsTrash style={{ color: "red" }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Courses;
