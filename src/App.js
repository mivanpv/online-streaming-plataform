// Descripción: Archivo principal de la aplicación, contiene la estructura de la aplicación y las rutas de la misma.
// Dependencias: React, react-router-dom, context/ShoppingCartProvider, components/SearchBar, components/SidebarMenu, components/Header, components/ShoppingCart, components/Footer, components/WelcomeScreen, components/NotFound, components/MovieTrailer, components/MovieDetail
// Variables:
//    - sidebarVisible: estado para mostrar u ocultar el menú lateral.
// Resultado: Renderiza la estructura de la aplicación con las rutas y los componentes necesarios.
// ==============================================================================================
// NOTA: Se puede agregar más rutas y componentes según las necesidades del proyecto.
// ==============================================================================================
// Ejemplo de uso: <App />
// ==============================================================================================

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
import { SpeedInsights } from "@vercel/speed-insights/react"

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
          <SpeedInsights />
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;