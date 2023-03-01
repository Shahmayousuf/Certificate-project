import React from "react";
import "./CertificatePrint.css";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
const CertificateScndPage = () => {
  return (
    <div>
      <div className="bodycontainer">
        <div className="certificate">
          <h1>Score Card</h1>
          <h3>(Based on Practices and Assenssements)</h3>
          <h2>Web Application Developer</h2>
          <br></br>
          <div className="stars">
            <h5 style={{ display: "flex", alignItems: "center" }}>
              React:
              <ReactStars />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center" }}>
              Angular:
              <ReactStars />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center" }}>
              Mean Stack:
              <ReactStars />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center" }}>
              Mern Stack:
              <ReactStars />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center" }}>
              Full Stack:
              <ReactStars />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center" }}>
              Figma:
              <ReactStars />
            </h5>
            <h5 style={{ display: "flex", alignItems: "center" }}>
              Pyhton:
              <ReactStars />
            </h5>
          </div>
        </div>
      </div>
      <div onClick={window.print}className="buttonprint" style={{display:'flex',justifyContent:'center'}}>
      <Button>Print</Button></div>
    </div>
  );
};

export default CertificateScndPage;
