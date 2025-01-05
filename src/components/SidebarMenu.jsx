import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <ListGroup>
        <ListGroup.Item action as={Link} to="/carrito-de-compras">
          Carrito de compras
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SidebarMenu;