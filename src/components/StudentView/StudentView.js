import React, { useEffect, useState } from "react";
import "./StudentView.css";
import { Button } from "react-bootstrap";
import { SlLocationPin } from "react-icons/sl";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Layout from "../../Pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  StudentviewApi,
  UpdateStudentApi,
  SingleStudeCourseApi,
} from "../../Store/StudentSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteStudentApi } from "../../Store/StudentSlice";
import { map } from "lodash";

import { Typography, Box, Modal } from "@mui/material";

const StudentView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleview } = useSelector((state) => ({
    singleview: state.students.singleview,
  }));

  //  const{studentcourses}=useSelector((state)=>({
  //   studentcourses:state.students.allStudents,
  //  }));
  console.log(singleview);

  const studentId = params.id;
  useEffect(() => {
    dispatch(StudentviewApi({ studentId, navigate }));
  }, []);

  const handleClick = () => {
    dispatch(DeleteStudentApi({ studentId, navigate }));
  };
  const handleUpdate = () => {
    dispatch(UpdateStudentApi({ studentId, navigate }));
  };
  const studentCourseId = params.id;
  useEffect(() => {
    dispatch(SingleStudeCourseApi({ navigate }));
  });
  const course = singleview.student_courses;
  console.log(course);

  const [showModal, setShowModal] = useState(false);

  const style = {
    position: "absolute",
    left: "50%",
    top: "100px",
    textAlign: "centre",
    width: "500px",
   
  background: '#c6c6c6'
  };

  return (
    <div>
      <Layout>
        <div>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Conform Delete
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are You Sure! Do You want to delete?
              </Typography>
              <div className="btns">
                <Button
                  onClick={handleClick}
                  style={{
                    background: "#601f1f",
                    color: "white",
                    border: "none",
                  }}
                >
                  Ok
                </Button>
                <Button onClick={() => setShowModal(false)}>Cancel</Button>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="studentbanner">
          <Row>
            <Col lg="6">
              <div className="print">
                <h5>STUDENT VIEW</h5>
                <Link to={"/CertificatePage"}>
                  <Button>Print Certificate</Button>
                </Link>
              </div>
              <div className="studentcotainer1">
                <div className="studentscontents">
                  <h6>{singleview.full_name}</h6>
                  <p></p>
                  <div className="iconpara">
                    <SlLocationPin style={{ color: "blue" }} />
                    <p>{singleview.address}</p>
                  </div>
                  <div className="iconpara">
                    <RiContactsLine style={{ color: "blue" }} />
                    <p></p>
                  </div>
                  <h6>Contact Details:</h6>
                  <div className="iconpara">
                    <MdOutlineMailOutline style={{ color: "blue" }} />
                    <p>Email:{singleview.email}</p>
                  </div>
                  <div className="iconpara">
                    <FiSettings style={{ color: "blue" }} />
                    <p>Mobile:{singleview.phone}</p>
                  </div>

                  <img src="data:image/png;base64,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" />

                  <div className="btns">
                    <Button
                      onClick={() => setShowModal(true)}
                      style={{
                        background: "#601f1f",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Delete
                    </Button>
                    <Link to={`/updatestudent/${singleview.id}`}>
                      <Button
                        onClick={handleUpdate}
                        style={{ background: "#1e531e", border: "none" }}
                      >
                        Update
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <div className="Tablecourse p-3" style={{ overflowX: "auto" }}>
                <div className="topsection d-flex ">
                  <h5>STUDENT COURSE</h5>
                  <Link to={`/createnew/${singleview.id}`}>
                    <Button id="greenbtn">+ Create New Course</Button>
                  </Link>
                </div>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>

                      <th>Course Name</th>
                      <th>Duration</th>
                      <th>Course Catogry</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    {map(course, (item) => (
                      <tr>
                        <td>
                          <input type="checkbox"></input>
                        </td>

                        <td>{item.course.course_name}</td>
                        <td>{item.course.duration}</td>
                        <td>
                          {item.course.course_category.course_category_name}
                        </td>
                        <td>
                          <div className="actionbtns">
                            <Button id="viewbtn">View details </Button>
                            <Button id="delbtn">Delete</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
};

export default StudentView;
