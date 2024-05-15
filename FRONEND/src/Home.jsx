import React from 'react';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import '../estilos/Home.css';

function Home() {
  return (
    <div>
      <Navbar /> {/* Aquí se muestra la barra de navegación */}
      <div style={{ minHeight: '100vh', backgroundColor: '#808080', padding: '20px', color: '#ffffff' }}>
        {/* Tarjeta Grande */}
        <div style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '150px', marginBottom: '50px',  backgroundImage: 'url("./img/fondoPr.jpg")', backgroundSize: '100%'  }}>
          <h2>Bienvenidos A CARRERA DE CICLISMOS</h2>
          <p>Grnades ligas de Carreras de Ciclismo...</p>
        </div>
        
        {/* Tarjetas de Botón de Radio */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', flex: '1', marginRight: '10px' }}>
            <h3>Botón de Radio 1</h3>
            <p>Contenido del botón de radio 1...</p>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Home;
