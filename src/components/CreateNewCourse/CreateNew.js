import React, { useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import "./CreateNew.css";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { CreateNewCourseApi, StudentAPi } from "../../Store/StudentSlice";
import { CourseApi } from "../../Store/CourseSlice";
import { Link } from "react-router-dom";

const CreateNew = () => {
   
  const [selectedItem, setSelectedItem] = useState({});

  console.log(selectedItem);
     
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { allStudents, allcourses } = useSelector((state) => ({
    allStudents: state.students.allStudents,
    allcourses: state.courses.allcourses,
  }));
     
  console.log(allcourses);

  const alldata = allStudents.results;
  console.log(alldata);

  const allcoursedata = allcourses.results;
  console.log(allcoursedata);

  useEffect(()=>{
    dispatch(StudentAPi())
  },[])
  useEffect(()=>{
    dispatch(CourseApi())
  },[])
  const handleStudent = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value,
    });
  };
const studentId =params.id

  const handleCreatenew = (e) => {
    e.preventDefault();
    dispatch(CreateNewCourseApi({ selectedItem,studentId, navigate }));
  }; 
    
              
  return (
    <div>
      <div className="updatebanner">
        <h5>CREATE NEW COURSE</h5>
        <div className="formcontainer p-5">
          <Form onSubmit={handleCreatenew}>
            <Row>
              <Col lg="6">
                <select
                  style={{ display: "block", padding: "5px", margin: "8px" ,width:'100%'}}
                  name="student"
                  id=""
                
                  onChange={(e) => handleStudent(e)}
                >
                  {map(alldata, (item) => (
                    <option value={item.id}>{item.full_name}</option>
                  ))}
                </select>
                <select
                  style={{ display: "block", padding: "5px", margin: "8px" ,width:'100%'}}
                  name="course"
                  id=""
                  onChange={(e) => handleStudent(e)}
                >
                  {map(allcoursedata, (item) => (
                    <option value={item.id}>{item.course_name}</option>
                  ))}
                </select>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Duration</Form.Label>
 
                  <Form.Control onChange={(e)=>setSelectedItem({...selectedItem,duration:e.target.value})}
                    type="text"
                    style={{ background: "rgba(128, 128, 128, 0.51)" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Course Catogry</Form.Label>
 
                  <Form.Control onChange={(e)=>setSelectedItem({...selectedItem,course_category_name:e.target.value})}
                    type="text"
                    style={{ background: "rgba(128, 128, 128, 0.51)" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="btnss">
              <Button type="submit">Create</Button>
              <Link to={'/studentview'}>
              <Button>Back</Button></Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
