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