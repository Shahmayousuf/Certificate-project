import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
          <Row>
            <Col md="6">
            <div className="para">
              <h3>Make Your Career with EdisonValley</h3>
              <p>
                we are a bunch of tech enthusiasts determined to uplift the
                society utilising the latest technologies around us
              </p>
              <Link to={"/login"}>
              <Button className="bg-warning text-white">Login</Button>
              </Link>
            </div>
            </Col>
            <Col md="6">
            <div className="picture">
              <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5f28fcb1aeab5_template_image_1596521649.webp" />
            </div>
            </Col>
          </Row>
    </div>
  );
};

export default Homepage;
