import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown }  from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class  CustomNavBar extends Component{
    render(){
        return(
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">My Website</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
        
        )



        
    }
}