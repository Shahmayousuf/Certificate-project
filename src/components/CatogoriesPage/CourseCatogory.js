import React, { useEffect } from "react";
import "./CourseCatogory.css";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Layout from "../../Pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import { CatogryApi } from "../../Store/CatogrySlice";
import { map } from "lodash";
import{useNavigate, useParams} from 'react-router-dom'
import { DeleteCourseCatgryApi ,UpdateCourseCtgryApi} from "../../Store/CatogrySlice";
 import {Link} from 'react-router-dom'

const CourseCatogory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { allcatogrys } = useSelector((state) => ({
    allcatogrys: state.catogry.allcatogrys,
  }));
  console.log(allcatogrys);
  useEffect(() => {
    dispatch(CatogryApi());
  },[dispatch]);

  const allcatogrydata = allcatogrys?.results;
  console.log(allcatogrydata);
    
  // const params=useParams()
  //   const courseCategoryId = params.id;

   const deleteHandle = (id)=> {
      dispatch(DeleteCourseCatgryApi({id,navigate}))
   }
  //  const updateHandle=(id)=>{
  //     dispatch(UpdateCourseCtgryApi({id,navigate}))
  //  }
  return (
    <div>
      <Layout>
        <div className="course-catogory">
          <h5>COURSE CATOGORY</h5>
          <div className="CourseContainer m-2" style={{ overflowX: "auto" }}>
            <Row>
              <Col lg="12">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ID</th>
                      <th>Course Catogory Name</th>
                      <th>Designation</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    {map(allcatogrydata, (item) => (
                      <tr>
                        <td>
                          <input type="checkbox"></input>
                        </td>
                        <td></td>
                        <td> {item.course_category_name}</td>

                        <td>{item.designation}</td>

                        <td>
                          <Link to={`/updatecoursectgry/${item.id}`}>
                          <BiPencil style={{ color: "blue" }} />{" "}</Link>

                          <BsTrash onClick={()=>deleteHandle(item.id)} style={{ color: "red" }} />
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

export default CourseCatogory;
