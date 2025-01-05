import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import SidebarMenu from './components/SidebarMenu';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SidebarMenu />
        <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/carrito-de-compras" element={<ShoppingCart />} />
            <Route path="/" element={
              <header className="App-header">
                <h1>Buscar peliculas</h1>
                <SearchBar />
              </header>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;