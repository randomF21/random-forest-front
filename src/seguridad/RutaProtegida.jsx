import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RutaProtegida = ({ rolesPermitidos  = [] }) => {
    const token = sessionStorage.getItem("token");
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    // Verificar si hay un token válido
    if (!token || !usuario) {
        console.error("No hay token disponible o usuario no está autenticado.");
        return <Navigate to="/login" replace />;
    }

    // Verificar si el rol del usuario está permitido
    if (!rolesPermitidos.includes(usuario.rol)) {
        console.error(`Acceso denegado para el rol: ${usuario.rol}`);
        return usuario.rol === 3 ? <Navigate to="/formulario" replace /> : <Navigate to="/" replace />;
    }

    // Si todo es válido, renderiza las rutas hijas
    return <Outlet />;
};

export default RutaProtegida;
