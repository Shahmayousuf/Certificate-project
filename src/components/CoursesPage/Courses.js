import React, { useEffect, useState } from "react";
import "./Courses.css";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Layout from "../../Pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import { CourseApi ,DeleteCourseApi} from "../../Store/CourseSlice";
import { map } from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Typography, Box, Modal } from "@mui/material";



const Courses = () => {

   const navigate=useNavigate()
  const params=useParams()
  const id=params.id
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

     const DeleteCourseHandle=(id)=>{
      dispatch(DeleteCourseApi({id,navigate}))
     }

     const [showModal,setShowModal]=useState(false)
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
                  onClick={DeleteCourseHandle(id)}
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
                      
                        <td>
                          <Link to={`/updatecourse/${item.id}`}>
                            <BiPencil style={{ color: "blue" }} />{" "}
                          </Link>

                          <BsTrash onClick={()=>setShowModal(true)}style={{ color: "red" }} />
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
