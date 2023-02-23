import React, { useEffect, useState } from "react";
import "./UpdateStudent.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Layout from "../../Pages/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link} from "react-router-dom";
import { UpdateStudentApi } from "../../Store/StudentSlice";
import { useParams } from "react-router-dom";


const UpdateStudent = () => { 
 
  const params=useParams()
  const [data,setData]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const studentId= params.id

  const { singleview } = useSelector((state) => ({
    singleview: state.students.singleview,
  }));


useEffect (()=>{
  setData(singleview)
},[])
    

  const handleUpadateSubmit=(e)=>{
    e.preventDefault()
    dispatch(UpdateStudentApi({data,studentId,navigate}))
  }

  return (
   
    <div>
      <Layout>
      <div className="updatebanner">
        <h5>UPDATE STUDENT</h5>
        <div className="formcontainer p-5">
          <Form onSubmit={handleUpadateSubmit}>
            <Row>
              <Col lg="6">
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>FullName:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,full_name:e.target.value})}type="string"style={{background:'rgba(128, 128, 128, 0.51)'}} value={data?.full_name} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control  onChange={(e)=>setData({...data,email:e.target.value})}type="email" maxLength={'60'} style={{background:'rgba(128, 128, 128, 0.51)'}} value={data?.email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control  onChange={(e)=>setData({...data, dob:e.target.value})}type="date" style={{background:'rgba(128, 128, 128, 0.51)'}} value={data?.dob}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data, address:e.target.value})}type="string" style={{background:'rgba(128, 128, 128, 0.51)'}} value={data?.address}/>
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Designation:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,designation:e.target.value})}className="formcontrol"  type="string"value={data?.designation}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Joining Date:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data, start_date:e.target.value})} className="formcontrol" type="date" value={data?.start_date}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date Of Leaving:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data,end_date:e.target.value})} className="formcontrol" type="date" value={data?.end_date} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone number:</Form.Label>
                  <Form.Control onChange={(e)=>setData({...data, phone:e.target.value})} className="formcontrol" type="numbe"maxLength={'10'} minLength={'10'}value={data?.phone}/>
                </Form.Group>
            
                </Col>
            </Row>
            <h6>Image:</h6>
                <Button variant="secondary" type="submit" style={{border:'none'}}>
                  Choose File
                </Button>

                <h7 style={{padding:'10px'}}><br></br>No file Choosen</h7>
                <div className="btns">
                <Button style={{ background:'#8080807a',color:'black', border:'none'}}>Back</Button> 
                
                <Button type="submit" style={{background:'#434141',border:'none'}}>Update</Button>
                </div>
          </Form>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default UpdateStudent;
