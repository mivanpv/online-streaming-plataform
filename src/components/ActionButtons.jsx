// Descripcion: Componente que renderiza los botones de alquilar y comprar.
// Dependencias: React, react-icons
// Variables:
//    - movie: objeto con la información de la película.
//    - onRent: función que se ejecuta al hacer clic en el botón de alquilar.
//    - onBuy: función que se ejecuta al hacer clic en el botón de comprar.
//    - isRented: booleano que indica si la película está alquilada.
//    - isBought: booleano que indica si la película está comprada.
// Resultado: Renderiza los botones de alquilar y comprar con los íconos correspondientes.
// Importante: Se debe importar el componente FaDollarSign y FaRegCalendarAlt de react-icons/fa.
// ==============================================================================================
// Ejemplo de uso: <ActionButtons movie={movie} onRent={rentMovie} onBuy={buyMovie} isRented={isRented} isBought={isBought} />
// ==============================================================================================
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