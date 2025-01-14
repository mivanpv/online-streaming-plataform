// Este componente se renderiza cuando el usuario intenta acceder a una ruta que no existe.
// Muestra un mensaje de error y un enlace para volver a la página de inicio.
// ==============================================================================================
// Ejemplo de uso: <NotFound />
// ==============================================================================================

// Hooks utilizados: Ninguno

import React from 'react';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
}

export default NotFound;