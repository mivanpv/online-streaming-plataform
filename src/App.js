import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import SidebarMenu from './components/SidebarMenu';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import NotFound from './components/NotFound';
import MovieTrailer from './components/MovieTrailer';
import MovieDetail from './components/MovieDetail';
import { ShoppingCartProvider } from './context/ShoppingCartProvider';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <ShoppingCartProvider>
      <Router>
        <div className="App">
          <Header />
          <button onClick={toggleSidebar} className="toggle-sidebar-btn">
            {sidebarVisible ? 'Ocultar' : 'Mostrar'} Menú
          </button>
          {sidebarVisible && <SidebarMenu />}
          <div className="content" style={{ marginLeft: sidebarVisible ? '250px' : '0', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route path="/buscar-peliculas" element={<SearchBar />} />
              <Route path="/carrito-de-compras" element={<ShoppingCart />} />
              <Route path="/trailer/:imdbID" element={<MovieTrailer />} />
              <Route path="/detalle/:imdbID" element={<MovieDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;