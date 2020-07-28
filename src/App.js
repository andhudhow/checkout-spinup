import React from 'react';
import { 
  Container,
  Row,
  Navbar,
  Nav,
  Card,
  Button 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import margherita from './images/margherita.jpg';
import meat from './images/meat.jpg';
import veggie from './images/veggie.jpg';
import two from './images/two_pizzas.jpg';
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
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="200em" src={margherita} />
            <Card.Body>
              <Card.Title>Pizza Kit - Margherita</Card.Title>
              <Card.Text>
                Is there anything more classic?
                <br/>
                <br/>
                Includes 1 dough ball, 2 oz sauce, 4 oz DOP buffalo mozzarella, and fresh basil sprigs.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="200em" src={meat} />
            <Card.Body>
              <Card.Title>Pizza Kit - Meat Topping</Card.Title>
              <Card.Text>
                Prosciutto, pepperoni, and more!
                <br/>
                <br/>
                Includes 1 dough ball, 2 oz sauce, 4 oz DOP buffalo mozzarella, 1 meat and 1 veggie topping.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="200em" src={veggie} />
            <Card.Body>
              <Card.Title>Pizza Kit - Veggie Topping</Card.Title>
              <Card.Text>
              🌱 Veggie toppings only! 🌱
                <br/>
                <br/>
                Includes 1 dough ball, 2 oz sauce, 4 oz DOP buffalo mozzarella, 2 veggie toppings.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <br /><br />
      <Container>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="200em" src={two} />
            <Card.Body>
              <Card.Title>2 Pizza Kits per Month</Card.Title>
              <Card.Text>
                Become a master dough slinger!
                <br/>
                <br/>
                2 Pizza Kits delivered to your door monthly.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      </Container>
    </div>
  );
}

export default App;
