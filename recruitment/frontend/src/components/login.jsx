import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <Container className="login-container">
        <h2 className="login-heading">Login to Your Account</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="login-text">
          <Link to="/signup">Don't have an account? Sign up here</Link>
        </p>
      </Container>
    </div>
  );
}
