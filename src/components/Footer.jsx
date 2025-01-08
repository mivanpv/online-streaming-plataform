// Descripcion: Componente que renderiza el pie de página.
// Dependencias: React, react-bootstrap
// Resultado: Renderiza el pie de página con el año actual y el mensaje de derechos reservados.
// ==============================================================================================
// NOTA: Este componente es una versión simplificada del pie de página.
// Se pueden agregar más elementos y estilos según las necesidades del proyecto.
// ==============================================================================================
// Ejemplo de uso: <Footer />
// ==============================================================================================

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Online Streaming Platform. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;