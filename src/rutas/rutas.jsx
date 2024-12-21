import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// pagina del sistema
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
    );
};

// parte de las rutas
// <Route path="/" element={<HomePage />} />
// <Route path="/dashboard" element={<DashboardPage />} />
// <Route path="*" element={<NotFoundPage />} /> {/* Ruta 404 */}
// parte de las rutas

export default AppRoutes;
