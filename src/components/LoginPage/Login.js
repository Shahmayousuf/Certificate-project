import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../Pages/Layout";
import { loginApi } from "../../Store/LoginSlice";
import "./Login.css";
const Login = () => {
  const [data,setData]=useState()

  const dispatch=useDispatch()
  const navigate = useNavigate()

  const handleLoginSubmit=(e)=>{
    e.preventDefault()
    dispatch(loginApi({data,navigate}))
  }
  return (
   
    <div>
     
        
      <div className="banner">
        
        <div className="form">
          <h3> EDISONVALLEY</h3>
          <h6>Login</h6>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={(e)=>setData ({...data,username:e.target.value})} type="text" placeholder="Enter Username" />
            </Form.Group>
              
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>setData({...data,password:e.target.value})} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            
            <Button variant="primary" type="submit">
              Login
            </Button>
            
          </Form>
           You don't have an account? <span>Register</span>
           <p>@2022 Edisonvalley.Design & Develops by Osperb
           </p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
