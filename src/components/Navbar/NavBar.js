


import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <div >
      <Navbar  expand="lg" style={{backgroundColor:"rgb(15, 15, 104)"}}>
      <Container fluid>
        <Navbar.Brand  className='text-white' href="#">EDISONVALLEY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link  className='text-white'href="#action1">Home</Nav.Link>
            <Nav.Link  className='text-white' href="#action2">About</Nav.Link>
            <Nav.Link  className='text-white' href="#action2">Features</Nav.Link>
            <Nav.Link  className='text-white'href="#action2">Team</Nav.Link>
            
          </Nav>
          
            <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
