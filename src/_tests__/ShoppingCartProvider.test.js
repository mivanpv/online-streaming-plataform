import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShoppingCartProvider, ShoppingCartContext } from '../context/ShoppingCartProvider';
import { act } from 'react-dom/test-utils';

describe('ShoppingCartProvider', () => {
  it('should add a movie to rentedMovies', () => {
    const TestComponent = () => {
      const { rentedMovies, rentMovie } = React.useContext(ShoppingCartContext);
      return (
        <div>
          <button onClick={() => rentMovie({ imdbID: '1', title: 'Test Movie' })}>Rent Movie</button>
          <div data-testid="rented-movies">{rentedMovies.length}</div>
        </div>
      );
    };

    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    act(() => {
      const button = screen.getByText('Rent Movie');
      fireEvent.click(button);
    });

    const rentedMovies = screen.getByTestId('rented-movies');
    expect(rentedMovies.textContent).toBe('1');
  });

  it('should add a movie to boughtMovies', () => {
    const TestComponent = () => {
      const { boughtMovies, buyMovie } = React.useContext(ShoppingCartContext);
      return (
        <div>
          <button onClick={() => buyMovie({ imdbID: '1', title: 'Test Movie' })}>Buy Movie</button>
          <div data-testid="bought-movies">{boughtMovies.length}</div>
        </div>
      );
    };

    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    act(() => {
      const button = screen.getByText('Buy Movie');
      fireEvent.click(button);
    });

    const boughtMovies = screen.getByTestId('bought-movies');
    expect(boughtMovies.textContent).toBe('1');
  });

  it('should remove a movie from rentedMovies', () => {
    const TestComponent = () => {
      const { rentedMovies, rentMovie, removeRentedMovie } = React.useContext(ShoppingCartContext);
      return (
        <div>
          <button onClick={() => rentMovie({ imdbID: '1', title: 'Test Movie' })}>Rent Movie</button>
          <button onClick={() => removeRentedMovie('1')}>Remove Rented Movie</button>
          <div data-testid="rented-movies">{rentedMovies.length}</div>
        </div>
      );
    };

    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    act(() => {
      const rentButton = screen.getByText('Rent Movie');
      fireEvent.click(rentButton);
    });

    act(() => {
      const removeButton = screen.getByText('Remove Rented Movie');
      fireEvent.click(removeButton);
    });

    const rentedMovies = screen.getByTestId('rented-movies');
    expect(rentedMovies.textContent).toBe('0');
  });

  it('should remove a movie from boughtMovies', () => {
    const TestComponent = () => {
      const { boughtMovies, buyMovie, removeBoughtMovie } = React.useContext(ShoppingCartContext);
      return (
        <div>
          <button onClick={() => buyMovie({ imdbID: '1', title: 'Test Movie' })}>Buy Movie</button>
          <button onClick={() => removeBoughtMovie('1')}>Remove Bought Movie</button>
          <div data-testid="bought-movies">{boughtMovies.length}</div>
        </div>
      );
    };

    render(
      <ShoppingCartProvider>
        <TestComponent />
      </ShoppingCartProvider>
    );

    act(() => {
      const buyButton = screen.getByText('Buy Movie');
      fireEvent.click(buyButton);
    });

    act(() => {
      const removeButton = screen.getByText('Remove Bought Movie');
      fireEvent.click(removeButton);
    });

    const boughtMovies = screen.getByTestId('bought-movies');
    expect(boughtMovies.textContent).toBe('0');
  });
});