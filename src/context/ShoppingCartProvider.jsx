// Este archivo contiene el contexto y el provider para el carrito de compras. 
// El contexto ShoppingCartContext contiene los estados y funciones necesarios para manejar las películas rentadas y compradas.
// El provider ShoppingCartProvider envuelve la aplicación y provee el contexto a todos los componentes que lo necesiten.
// Para usar el contexto en un componente, se importa el contexto y se utiliza el hook useContext para acceder a los valores del contexto.

import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [rentedMovies, setRentedMovies] = useState([]);
  const [boughtMovies, setBoughtMovies] = useState([]);

  const rentMovie = (movie) => {
    if (!rentedMovies.some(m => m.imdbID === movie.imdbID)) {
      // Si la película está en la lista de compradas, eliminarla
      if (boughtMovies.some(m => m.imdbID === movie.imdbID)) {
        setBoughtMovies(boughtMovies.filter(m => m.imdbID !== movie.imdbID));
      }
      setRentedMovies([...rentedMovies, movie]);
    }
  };

  const buyMovie = (movie) => {
    if (!boughtMovies.some(m => m.imdbID === movie.imdbID)) {
      // Si la película está en la lista de rentadas, eliminarla
      if (rentedMovies.some(m => m.imdbID === movie.imdbID)) {
        setRentedMovies(rentedMovies.filter(m => m.imdbID !== movie.imdbID));
      }
      setBoughtMovies([...boughtMovies, movie]);
    }
  };

  const removeRentedMovie = (imdbID) => {
    setRentedMovies(rentedMovies.filter(movie => movie.imdbID !== imdbID));
  };

  const removeBoughtMovie = (imdbID) => {
    setBoughtMovies(boughtMovies.filter(movie => movie.imdbID !== imdbID));
  };

  return (
    <ShoppingCartContext.Provider value={{ rentedMovies, boughtMovies, rentMovie, buyMovie, removeRentedMovie, removeBoughtMovie }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};