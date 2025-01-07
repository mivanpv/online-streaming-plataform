import React, { useContext } from 'react';
import { FaDollarSign, FaRegCalendarAlt } from 'react-icons/fa';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import { Link } from 'react-router-dom';

function MovieStats() {
  const { rentedMovies, boughtMovies } = useContext(ShoppingCartContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/carrito-de-compras" style={{ marginRight: '20px', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <FaRegCalendarAlt style={{ marginRight: '5px' }} />
        <span>{rentedMovies.length}</span>
      </Link>
      <Link to="/carrito-de-compras" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <FaDollarSign style={{ marginRight: '5px' }} />
        <span>{boughtMovies.length}</span>
      </Link>
    </div>
  );
}

export default MovieStats;