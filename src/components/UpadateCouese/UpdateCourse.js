import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import Layout from '../../Pages/Layout';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SingleCourseApi, UpdateCourseApi } from '../../Store/CourseSlice'; 
import { CatogryApi } from '../../Store/CatogrySlice';
import { Link } from 'react-router-dom';
import {map} from 'lodash'


const UpdateCourse = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const params=useParams()
    const id=params.id

   const [data,setData]=useState({})
      console.log(data);
  
      const {SingleCourse}= useSelector((state)=>({
       SingleCourse:state.courses.SingleCourse
      }))
      console.log(SingleCourse);
       
       useEffect(()=>{
        setData(SingleCourse)
       },[]); 

       useEffect(()=>{
        dispatch(SingleCourseApi(id))
       },[])
      
       const courseHandle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
     }
    
     
   const updateCoursehandle = (e) => { 
    e.preventDefault();
    dispatch(UpdateCourseApi({id,navigate,data}))
   }
      

  return (
    <div>
      
      <Layout>
      <div className='createcourse '>
        <h5>UPDATE COURSE</h5>
        <div className='createcourse-container p-4'>
            <Row>
            <Col lg="6">
        <Form onSubmit={updateCoursehandle}>
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>Course Name:</Form.Label>
        <Form.Control  onChange={(e)=>courseHandle(e)} type="string"style={{background:'rgba(128, 128, 128, 0.51)' }} 
        name='course_name'
        value={data?.course_name}
        />
           
         
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label >Duration</Form.Label>
        <Form.Control onChange={(e)=>courseHandle(e)} type="number" style={{background:'rgba(128, 128, 128, 0.51)'}} 
        name='duration'
        value={data?.duration}
        />
      </Form.Group>
   
      <div className="btns ">
        <Link to={"/course"}>
                <Button style={{ background:'#8080807a',color:'black', border:'none'}}>Back</Button></Link> <Button type='submit' style={{background:'#434141',border:'none'}}>Update</Button>
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

export default UpdateCourse
