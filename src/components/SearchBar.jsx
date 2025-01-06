import React, { useState, useContext } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import MovieCard from './MovieCard';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { rentMovie, buyMovie } = useContext(ShoppingCartContext);

  const textchange = (e) => {
    setSearch(e.target.value);
  };

  const searchMovies = async () => {
    const apiKey = '593d9c0b'; // Reemplaza con tu clave API de OMDb
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);
    const data = await response.json();
    setResults(data.Search || []);
  };

  return (
    <div>
      <h2>Busqueda de pelicula</h2>
      <Form className="d-flex align-items-center mb-3" onSubmit={(e) => { e.preventDefault(); searchMovies(); }}>
        <FormControl
          type="search"
          placeholder="Buscar"
          className="mr-2"
          aria-label="Search"
          value={search}
          onChange={textchange}
        />
        <Button variant="outline-success" onClick={searchMovies}>
          <FaSearch />
        </Button>
      </Form>
      <Row>
        {results.length > 0 ? (
          results.map((movie) => (
            <Col key={movie.imdbID} md={4}>
              <MovieCard movie={movie} onRent={rentMovie} onBuy={buyMovie} showActions={true}/>
            </Col>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </Row>
    </div>
  );
}

export default SearchBar;