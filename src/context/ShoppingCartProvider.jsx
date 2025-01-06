import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [rentedMovies, setRentedMovies] = useState([]);
  const [boughtMovies, setBoughtMovies] = useState([]);

  const rentMovie = (movie) => {
    setRentedMovies([...rentedMovies, movie]);
  };

  const buyMovie = (movie) => {
    setBoughtMovies([...boughtMovies, movie]);
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