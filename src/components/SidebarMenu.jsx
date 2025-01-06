import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';

function SidebarMenu() {
  return (
    <div className="sidebar-menu">
      <ListGroup>
        <ListGroup.Item action as={Link} to="/">
          <FaHome style={{ marginRight: '10px' }} />
          Inicio
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/buscar-peliculas">
          <FaSearch style={{ marginRight: '10px' }} />
          Buscar películas
        </ListGroup.Item>
        <ListGroup.Item action as={Link} to="/carrito-de-compras">
          <FaShoppingCart style={{ marginRight: '10px' }} />
          Carrito de compras
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SidebarMenu;