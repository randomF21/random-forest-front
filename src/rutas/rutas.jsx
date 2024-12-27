import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// pagina del sistema
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegistroPage from '../pages/RegistroPage';
import DashboardPage from '../pages/DashboardPage';
// proteccion de ruta
import RutaProtegida from '../seguridad/rutaProtegida';
import CargarDatosPage from '../pages/CargarDatosPage';
import UsuariosPage from '../pages/UsuariosPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/registro" element={<RegistroPage />} />

                {/* <Route element={<RutaProtegida />} > */}
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/cargar-datos" element={<CargarDatosPage />} />
                    <Route path="/usuarios" element={<UsuariosPage />} />
                {/* </Route> */}

            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
    );
};

export default AppRoutes;
