import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieStats from './MovieStats';

function Header() {
  return (
    <Navbar bg="dark" variant="dark"  className="Navbar">
      <Container>
        <Navbar.Brand as={Link} to="/"  className="Navbar__brand">
          Online Streaming Platform
          <MovieStats />
        </Navbar.Brand>
        <Navbar.Collapse className="Navbar__collapse">
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;