import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';


import './Home.css'

export default class Home extends Component{
    render(){
        return(
          
         <Container>
          <Jumbotron>
            <h2>Welcome to my website</h2>
            <p></p>
             <Link Link to="/about">
                <Button variant="primary">Learn more</Button>
            </Link>
          </Jumbotron>

          <Row className="show-grid text-centre">
          <Col xs={6} md={4} ClassName="person-wrapper">
      <     Image src="Assets/Person.jpg" className="profile-pic" rounded />
            <h3>Love hiking</h3>
            <p>“When everything feels like an uphill struggle, Just think of the view from the top.” - 😛</p>
            </Col>
            <Col xs={6} md={4} ClassName="person-wrapper">
      <     Image src="Assets/Person2.jpg" className="profile-pic" rounded />
            <h3>Love solo bike rides</h3>
            <p>Ride as much or as little, as long or as short as you feel. ...😛</p>
            </Col>
            <Col xs={6} md={4} ClassName="person-wrapper">
      <     Image src="Assets/Person3.jpg" className="profile-pic" rounded />
            <h3>Love architecture</h3>
            <p>Fell in love with magical hampi.. 😛</p>
            </Col>
            </Row>
          </Container>
          )    
    }

    
}
