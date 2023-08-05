import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="custom-nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/jobs" className="custom-nav-link">
            Jobs
          </Nav.Link>
          <Nav.Link as={Link} to="/candidates" className="custom-nav-link">
            Candidates
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="custom-nav-link">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
