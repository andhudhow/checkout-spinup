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

import { loadStripe } from '@stripe/stripe-js';

import margherita from './images/margherita.jpg';
import meat from './images/meat.jpg';
import veggie from './images/veggie.jpg';
import two from './images/two_pizzas.jpg';

const stripePromise = loadStripe('pk_test_51H9eyuKgRUl0zJ2kaMIzFP4QHZTNp1Dd2xmka8zZwJduMDcGAZnNMVpQDDiowaGg545Np9TiyJWuzy2hzgPVp8Rl00Ec5SG3SI');

function App() {

  const handleOneTimeClick = async e => {
    // When the customer clicks on the button, redirect them to Checkout.
    const price = e.target.value;
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000',
      shippingAddressCollection: {
        allowedCountries: ['US'],
      },
      billingAddressCollection: "auto"
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  const handleSubClick = async e => {
    // When the customer clicks on the button, redirect them to Checkout.
    const price = e.target.value;
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'subscription',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000',
      shippingAddressCollection: {
        allowedCountries: ['US'],
      }
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  return (
    <div className="main">
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Brand href="#">🇮🇹 Allora 🇮🇹</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
            Pizza Kits
        </Row>
        <Row className="space">
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
              <Button variant="primary" value="price_1H9fRtKgRUl0zJ2kjcrY493m" onClick={handleOneTimeClick}>Buy now</Button>
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
              <Button variant="primary" value="price_1H9fVnKgRUl0zJ2kBmX9w5GJ" onClick={handleOneTimeClick}>Buy now</Button>
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
              <Button variant="primary" value="price_1H9fYJKgRUl0zJ2kfpLCPv8c" onClick={handleOneTimeClick}>Buy now</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <br /><br />
      <Container>
        <Row className="justify-content-md-center">Pizza Subscriptions</Row>
        <Row className="justify-content-md-center">
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
                <Button variant="primary" value="price_1H9fiHKgRUl0zJ2kTi9PwwLN" onClick={handleSubClick}>Buy now</Button>
              </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
