import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Students.css";
import { FcSearch } from "react-icons/fc";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Layout from "../../Pages/Layout";
import { useSelector, useDispatch } from "react-redux";
import { StudentAPi } from "../../Store/StudentSlice";
import { map } from "lodash";
import {AiFillEye}from "react-icons/ai"
import { Link } from "react-router-dom";



const Students = () => {
  const dispatch = useDispatch();
  const { allStudents } = useSelector((state) => ({
    allStudents: state.students.allStudents,
  }));
  console.log(allStudents);
  useEffect(() => {
    dispatch(StudentAPi());
  }, []);

  const alldata = allStudents.results;
  console.log(alldata);

  return (
    <div>
      <Layout>
        <div className="studentspage">
          <h5>STUDENTS</h5>

          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" style={{ padding: "10px" }}>
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="tablebanner p-3" style={{ overflowX: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Joining Date</th>
                  <th>DOB</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {map(alldata, (item) => (
                  <tr>
                    <td></td>
                    <td>{item.full_name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.start_date}</td>
                    <td>{item.dob}</td>
                    <td>{item.designation}</td>
                    <td></td>
              <Link to={`/studentview/${item.id}`}>
                    
                    <td><AiFillEye/></td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Students;
