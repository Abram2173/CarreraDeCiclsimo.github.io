import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Organizador from './components/Organizador';
import Admin from './components/Admin';
import './App.css';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordReset from './components/PasswordReset';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
  };

  // Check for logged-in state (replace with your authentication logic)
  const isLoggedIn = false; // Example: Replace with actual logic

  return (
    <div>
      {/* Agrega ToastContainer aquí */}
      <ToastContainer />

      <Router>
        <div>
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Organizador" element={<Organizador />} />
            <Route exact path="/password-reset-request" component={PasswordResetRequest} />
            <Route exact path="/password-reset/:token" component={PasswordReset} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
