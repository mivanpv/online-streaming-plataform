import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieStats from './MovieStats';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Online Streaming Platform
          <MovieStats />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;