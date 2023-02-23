import React from "react";
import "./DashBoard.css";
import { Col, Row } from "react-bootstrap";
import { RiInboxArchiveFill } from "react-icons/ri";
import {RiPagesLine } from "react-icons/ri";
import Layout from "../../Pages/Layout";
import { Link } from 'react-router-dom';
const DashBoard = () => {
  return (
    
    <div>
      <Layout>
      <div className="Dashboard">
        <h5>DASHBOARD</h5>
        <div className="divs">
          <div className="main div">
            <Row>
              <Col lg="4"  md="6">
                <div className="div1">
                  <h4>Welcome Back!</h4>
                  <p>It will seem like simplified</p>
                  <img src="https://img.freepik.com/premium-vector/software-developer-semi-flat-color-vector-character-sitting-figure-person-white-programmer-work-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-6500.jpg?w=2000" />
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="4" md="6">
                <div className="div11">
                  <div className="profile">
                    <img
                      style={{
                        width: "70px",
                        position: "absolute",
                        top: "-40px",
                        left: "20px",
                      }}
                      src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                    />
                  </div>
                  <div className="profilepara1">
                    <h5>Cynthia Price</h5>
                    <h7>Ui/Ux designer</h7>
                  </div>
                  <div className="profilepara2">
                    <h5>125</h5>
                    <h7>Projects</h7>
                    <br></br>
                    <Link to={"/studentview"}>
                    <button>view Profile </button>
                    </Link>
                  </div>
                  <div className="profilepara3">
                    <h5>$1245</h5>
                    <h7>Revenue</h7>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="div2main">
         
            <Row>
              <Col lg="4" md="6">
              <div className="div2">
                <p style={{padding:"10px"}}>Available Courses</p>
                <h6 style={{padding:"10px"}}>3</h6>
                <div className="iconcourse">
                  <RiInboxArchiveFill />
                </div>
                </div>
              </Col>
            </Row>
        
          
         
            <Row>
              <Col lg="4" md="6" >
              <div className="div2">
                <p style={{padding:"10px"}}>Course Completed Students</p>
                <h6 style={{padding:"10px"}}>2</h6>
                <div className="iconcourse">
                  <RiInboxArchiveFill/>
                </div>
                </div>
              </Col>
            </Row>
          
         
            <Row>
              <Col lg="4" md="6">
              <div className="div2">
                <p style={{padding:"10px"}}>Total Students</p>
                <h6 style={{padding:"10px"}}>5</h6>
                <div className="iconcourse">
                  <RiPagesLine />
                </div>
                </div>
              </Col>
            </Row>
       
          
            <Row>
              <Col lg="4"  md="6">
              <div className="div2">
                <p style={{padding:"10px"}}>Total Students</p>
                <h6 style={{padding:"10px"}}>5</h6>
                <div className="iconcourse">
                  <RiPagesLine />
                </div>
                </div>
              </Col>
            </Row>
          
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default DashBoard;
