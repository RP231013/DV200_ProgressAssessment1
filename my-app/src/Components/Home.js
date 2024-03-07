import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Badge } from 'react-bootstrap';
import './Home.css';
import Car1 from '../Assets/car1.jpg';
import Car2 from '../Assets/car2.jpg';
import Car3 from '../Assets/car3.jpg';

function Home() {
  return (
    <Container fluid className="home-container homePageContent">
      <Row className="justify-content-center text-center">
        <Col className='headerCol'>
          <h1>Welcome to Ferrari Fever <Badge bg="danger">F1</Badge></h1>
          <p>
            Dive into the world of Ferrari - a symbol of speed, luxury, and excellence. Explore the legacy of Ferrari, marvel at the engineering excellence, and stay updated with the latest Ferrari models and news.
          </p>
          <Button variant="outline-light" href="#">Discover More</Button>
        </Col>
      </Row>
      <Row className="justify-content-center text-center carCardsContainer">
        <Col className='carCards' xs lg="2">
            <Card style={{ width: '18rem', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                <Card.Img variant="top" src={Car1} style={{height: '200px', width: 'auto'}} />
                <Card.Body>
                    <Card.Title>La Ferrari</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

        <Col className='carCards' xs lg="2">
        <Card style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Card.Img variant="top" src={Car2} style={{height: '200px', width: 'auto'}} />
                <Card.Body>
                    <Card.Title>F12</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
          
        </Col>

        <Col className='carCards' xs lg="2">
        <Card style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <Card.Img variant="top" src={Car3} style={{height: '200px', width: 'auto'}} />
                <Card.Body>
                    <Card.Title>458</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
          
        </Col>
      </Row>
      <Row className="ferrariListContainer">
        <Col md={3}>
            <h3>Other Ferrari's</h3>
            <ListGroup className='ferrariList'>
                <ListGroup.Item className="bg-dark">LaFerrari</ListGroup.Item>
                <ListGroup.Item className="bg-dark">Ferrari Roma</ListGroup.Item>
                <ListGroup.Item className="bg-dark">Ferrari SF90 Stradale</ListGroup.Item>
                <ListGroup.Item className="bg-dark">Ferrari F8 Tributo</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={5}>
        <h2>History of Excellence</h2>
            <p>
              Founded by Enzo Ferrari in 1939, Ferrari has been synonymous with speed and performance. From dominating the world of motorsports to creating the world’s most admired supercars, Ferrari's story is one of passion and innovation.
            </p>
        </Col>
        <Col md={3}>
        <h3>Quick Links</h3>
            <ul className="footerList">
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Careers</li>
            </ul>
        </Col>
        
      </Row>
      
      
    </Container>
  );
}

export default Home;