import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div>
      <Container className="signup-container">
        <h2 className="signup-heading">Create an Account</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <p className="signup-text">
          <Link to="/login">Already have an account? Login here</Link>
        </p>
      </Container>
    </div>
  );
}
