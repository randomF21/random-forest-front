import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// pagina del sistema
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import CargarDatosPage from '../pages/CargarDatosPage';
import UsuariosPage from '../pages/UsuariosPage';
import PrediccionesPage from '../pages/PrediccionesPage';
import FormularioPage from '../pages/FormularioPage';
// proteccion de ruta
import RutaProtegida from '../seguridad/rutaProtegida';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/formulario" element={<FormularioPage />} />
                

                <Route element={<RutaProtegida rolesPermitidos={[1, 2]} />} >
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/predicciones" element={<PrediccionesPage />} />
                    <Route path="/cargar-datos" element={<CargarDatosPage />} />
                    <Route path="/usuarios" element={<UsuariosPage />} />
                </Route>

              

            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
    );
};

export default AppRoutes;
