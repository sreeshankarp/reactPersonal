import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';
import './About.css';
import './Home.css'
import './Contact.css'
import { Link } from 'react-router-dom';


export default class  Contact extends Component{
    render(){
        return(
            <Container>
            <Jumbotron>
              <h2>Contact Me</h2>
            </Jumbotron>
            
            
            <Row className="show-grid text-centre">
          <Col xs={6} md={4} ClassName="person-wrapper">
          <a href="https://www.facebook.com/sreeshankarp/">  
                <Image src="Assets/fb.png" className="Social-pic" rounded />
                </a>
           
          </Col>
            
            <Col xs={6} md={4} ClassName="person-wrapper">
            <a href="https://www.instagram.com/sreeshankar_p/">  
      <     Image src="Assets/Instagram.png" className="Social-pic" rounded />
            </a>
            </Col>
            <Col xs={6} md={4} ClassName="person-wrapper">
            <a href="https://www.linkedin.com/in/sreeshankar-p-23777359/">  
      <     Image src="Assets/LinkedIn.png" className="Social-pic" rounded />
            </a>
            </Col>
            </Row>
            </Container>


        )
    }
}