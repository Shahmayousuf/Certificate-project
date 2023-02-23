import React from 'react'
import'./SideBar.css'
import { Col, Row } from "react-bootstrap";

import Dropdown from 'react-bootstrap/Dropdown';
import Container from "react-bootstrap/Container";
import{BiHomeCircle} from "react-icons/bi";
import{CgProfile} from "react-icons/cg";
import{HiLibrary} from "react-icons/hi";
import{RiUserSettingsFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div>
       <div className="lists">

      {/* <Row> */}
         <Col lg="3"></Col>
         <h6 style={{color:'grey'}}>MENU</h6>
         <h6><BiHomeCircle/>Dashboard </h6>

      {/* </Row> */}
      {/* <Row>
         <Col lg="3"></Col> */}
        
         <Dropdown >
      <Dropdown.Toggle style={{background:'white', color:'black' ,border:'none'}} >
       <CgProfile/> Students
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        <Link to={'/students'}>
        <Dropdown.Item href="#/action-1">All Students</Dropdown.Item></Link>
        {/* <Link to={'/updatestudent'}>
        <Dropdown.Item href="#/action-2">Update Student</Dropdown.Item></Link> */}
        <Link to={'/createstudent'}>
        <Dropdown.Item href="#/action-3">Create Student</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
         

      {/* </Row> */}
      {/* <Row> */}
         <Col lg="3"></Col>
         <Dropdown >
      <Dropdown.Toggle style={{background:'white', color:'black' ,border:'none'}} >
       <HiLibrary/>Courses
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to={'/course'}>
        <Dropdown.Item href="#/action-1">All Courses</Dropdown.Item></Link>
        {/* <Link to={'/updatecourse'}>
        <Dropdown.Item href="#/action-2">Update Courses</Dropdown.Item></Link> */}
        <Link  to={"/createcourse"}>
        <Dropdown.Item href="#/action-3">Create Courses</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
         

      {/* </Row> */}
      {/* <Row> */}
         <Col lg="3"></Col>
         <Dropdown >
      <Dropdown.Toggle style={{background:'white', color:'black' ,border:'none'}} >
       <RiUserSettingsFill/>Courses Catogory
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to={'/coursecatogory'}>
        <Dropdown.Item href="#/action-1">All Courses Catogory</Dropdown.Item></Link>
        {/* <Link to={'/updatecoursectgry'}>
        <Dropdown.Item href="#/action-2">Update Courses Catogory</Dropdown.Item></Link> */}
        <Link to={'/createcoursectgry'}>
        <Dropdown.Item href="#/action-3">Create Courses Catogory</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
         

      {/* </Row> */}
      </div>
    </div>
  )
}

export default SideBar
