import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [search, setSearch] = useState('');

  const textchange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Form className="d-flex align-items-center mb-3">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="mr-2"
          aria-label="Search"
          value={search}
          onChange={textchange}
        />
        <Button variant="outline-success">
          <FaSearch />
        </Button>
      </Form>
      <div className="ml-3">
        texto buscado: {search}
      </div>
    </div>
  );
}

export default SearchBar;