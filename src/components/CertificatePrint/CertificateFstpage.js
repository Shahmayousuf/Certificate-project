import React, { useEffect } from "react";
import "./CertificatePrint.css";
import { Row, Col } from "react-bootstrap";
import { useDispatch ,useSelector} from "react-redux";
import { StudentviewApi } from "../../Store/StudentSlice"; 
import { useParams } from "react-router-dom";
import StudentView from "../StudentView/StudentView";
const CertificateFstpage = () => {


  const dispatch=useDispatch()
  const { singleview } = useSelector((state) => ({
    singleview:state.students.singleview,
  }));
  console.log(singleview);
  const studentId=useParams()
    useEffect(()=>{
      dispatch(StudentviewApi({studentId}))
       
    },[])
    
  return (
    <div>
   
      <Row>
        <Col lg="12">
          <div className="bodycontainer">
            <div className="certificate">
              <h1>CERTIFICATE</h1>
              <h2>of Experience</h2>
              <br></br>
              <h3>This certify that</h3>
              <h3>{singleview?.full_name}</h3>

             
                <p>
                  {" "}
                  was employed at Xanthrone e-solutions as a web application
                  developer,from <span style={{fontWeight:'bold'}}>{singleview?.start_date}</span>to <span  style={{fontWeight:'bold'}}>{singleview?.end_date}</span>, while showcasing a
                  proffesional commandable,work attitude,throughout the
                  specified time periode.We wish all the best in his/her future
                  endovers
                </p>
             
              <br></br>
              <h4>CEO</h4>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CertificateFstpage;
