import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';
import './About.css';


export default class  About extends Component{
    render(){
        return(
          
            <Container>
            <Jumbotron>
              <h2>About Me</h2>
              
            </Jumbotron>
            
            <Row className="show-grid text-centre">
            <Col xs={6} md={4} ClassName="person-wrapper">
            <Image src="Assets/AboutMe.jpg" className="profile-pic" rounded />
              <p></p>
              <p></p>
              <p></p>
              <p>Born at kozhikode,kerala on 15th April 1989</p>
              <p>Graduation and post graduation from Anna university,chennai</p>
              <p>Working as senior engineer for Big 4 Audit firm at Bangalore</p>
              <p>Skilled in technologies like .Net,React Js,SQL ,VBA,Automation technologies</p>
              </Col>
              </Row>
            </Container>
        )



        
    }
}