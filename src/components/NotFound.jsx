// Este componente se renderiza cuando el usuario intenta acceder a una ruta que no existe.
// Muestra un mensaje de error y un enlace para volver a la página de inicio.
// ==============================================================================================
// Ejemplo de uso: <NotFound />
// ==============================================================================================

// Hooks utilizados: Ninguno

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

function NotFound() {
  return (
    <Container className="NotFound" style={{ textAlign: 'center', padding: '50px 0' }}>
      <Row>
        <Col>
          <FaExclamationTriangle size={100} color="red" />
          <h1 style={{ marginTop: '20px' }}>404</h1>
          <h2>Página no encontrada</h2>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Button variant="primary" as={Link} to="/">
            Volver al Inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;