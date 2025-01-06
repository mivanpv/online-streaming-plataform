import React from 'react';
import { FaDollarSign, FaRegCalendarAlt } from 'react-icons/fa';

function ActionButtons({ movie, onRent, onBuy, isRented, isBought }) {
  return (
    <>
      <FaRegCalendarAlt 
        style={{ cursor: 'pointer', marginLeft: '20px',marginRight: '10px', color: isRented ? 'green' : 'black' }} 
        onClick={() => onRent(movie)} 
        title="Alquilar"
      />
      <FaDollarSign 
        style={{ cursor: 'pointer', color: isBought ? 'green' : 'black' }} 
        onClick={() => onBuy(movie)} 
        title="Comprar"
      />
    </>
  );
}

export default ActionButtons;