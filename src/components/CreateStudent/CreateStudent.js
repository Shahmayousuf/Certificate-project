import React, { useState } from 'react'
import './CreateStudent.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Layout from '../../Pages/Layout';
import { CreateStudentApi } from '../../Store/StudentSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateStudent = () => {
  const [data,setData]=useState({})
  console.log(data);
     
  
  const navigate=useNavigate()
    const dispatch=useDispatch()
     

  const studentsubmit=(e)=>{
    e.preventDefault();
  dispatch(CreateStudentApi({data,navigate}))
  }


  return (
    <div>
      <Layout>
      <div className="updatebanner">
        <h5>CREATE STUDENT</h5>
        <div className="formcontainer p-5">
          <Form onSubmit={studentsubmit}>
            <Row>
              <Col lg="6">
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,full_name : e.target.value})} type="string" required style={{background:'rgba(128, 128, 128, 0.51)'}} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,email:e.target.value})} type="email" style={{background:'rgba(128, 128, 128, 0.51)'}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,dob:e.target.value})} type="date" style={{background:'rgba(128, 128, 128, 0.51)'}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,address:e.target.value})}type="string" style={{background:'rgba(128, 128, 128, 0.51)'}}/>
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Designation:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,designation:e.target.value})} className="formcontrol"  type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Joining Date:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,start_date:e.target.value})} className="formcontrol" type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date Of Leaving:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,end_date:e.target.value})} className="formcontrol" type="date"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone number:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,phone:e.target.value})} className="formcontrol" required type="number" maxLength='10' minLength='10'/>
                </Form.Group>
            
                </Col>
            </Row>
            <h6>Image:</h6>
                <Button variant="secondary" type="submit" style={{border:'none'}}>
                  Choose File
                </Button>

                <h7 style={{padding:'10px'}}><br></br>No file Choosen</h7>
                <div className="btns">
                <Link to={"/students"}>
                <Button type='submit' style={{ background:'#8080807a',color:'black', border:'none'}}>Back</Button> </Link>
                <Button type='submit'  style={{background:'#434141',border:'none'}}>Create</Button>
                </div>
          </Form>
        </div>
      </div>
      </Layout>
    </div>
  )
}

export default CreateStudent
