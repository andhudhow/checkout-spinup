import React from 'react';
import { 
  Navbar,
  Nav,
  Card,
  Button 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import margherita from './margherita.jpg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Allora</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={margherita} />
        <Card.Body>
          <Card.Title>Pizza Margherita</Card.Title>
          <Card.Text>
            Is there anything more classic? One bite and you'll be transported to Naples where it all began.
            <br/>
            <br/>
            Includes 1 dough ball, 2 oz sauce, 4 oz DOP buffalo mozzarella, and fresh basil sprigs.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={margherita} />
        <Card.Body>
          <Card.Title>Pizza Margherita</Card.Title>
          <Card.Text>
            Is there anything more classic? One bite and you'll be transported to Naples where it all began.
            <br/>
            <br/>
            Includes 1 dough ball, 2 oz sauce, 4 oz DOP buffalo mozzarella, and fresh basil sprigs.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={margherita} />
        <Card.Body>
          <Card.Title>Pizza Margherita</Card.Title>
          <Card.Text>
            Is there anything more classic? One bite and you'll be transported to Naples where it all began.
            <br/>
            <br/>
            Includes 1 dough ball, 2 oz sauce, 4 oz DOP buffalo mozzarella, and fresh basil sprigs.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
