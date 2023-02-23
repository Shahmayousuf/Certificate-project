import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import Layout from '../../Pages/Layout';
const UpdateCourse = () => {
  return (
    <div>
      
      <Layout>
      <div className='createcourse '>
        <h5>UPDATE COURSE</h5>
        <div className='createcourse-container p-4'>
            <Row>
            <Col lg="6">
        <Form>
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label>Course Name:</Form.Label>
        <Form.Control type="text"style={{background:'rgba(128, 128, 128, 0.51)'}}/>
 
         
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label >Duration</Form.Label>
        <Form.Control type="text" style={{background:'rgba(128, 128, 128, 0.51)'}}/>
      </Form.Group>
  
      
    
      <div className="btns ">
                <Button style={{ background:'#8080807a',color:'black', border:'none'}}>Back</Button> <Button style={{background:'#434141',border:'none'}}>Update</Button>
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
