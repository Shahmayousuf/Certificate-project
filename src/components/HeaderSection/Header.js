import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FcSearch } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi, logOutApi } from "../../Store/LoginSlice";
import "./Header.css";

const Header = () => {
  
const dispatch = useDispatch()
const navigate = useNavigate()

  const ClickHandleLogout=()=>{
   dispatch(logOutApi({navigate}))
  }
  return (
    <div className="header-body">
      <Row>
        <Col lg="12">
          <div className="Header1">
            {" "}
            
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>
                  Edisonvalley
                </Navbar.Brand>
                <Navbar.Toggle   aria-controls="navbarScroll" />
                <Navbar.Collapse style={{padding:'5px'}} id="navbarScroll">
                  <Form className="d-flex">
                    <span className="searchicon">
                      <FcSearch />
                    </span>

                    <Form.Control
                      id="search"
                      type="search"
                      placeholder="serach"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                  <Button  onClick={ClickHandleLogout}type="submit" style={{margin:'10px'}}>LogOut</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Row>
     
  
    </div>
  );
};

export default Header;
