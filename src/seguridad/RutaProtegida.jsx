import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AlertaService } from "../servicios/AlertaService";

// constante para validar 
const RutaProtegida = () => {
    // intentamos guardar el token
    const token = sessionStorage.getItem('token');
    // verificamos si existe
    if(!token){
        // sino existe mandamos alerta y redirigimos
        AlertaService.custom("Token invalido");
        return <Navigate to="/login" replace />
    }

    try {
        // Decodificar el token
        const decodedToken = jwtDecode(token);
        // Obtener la fecha de expiración
        const currentTime = Date.now() / 1000; // Tiempo actual en segundos
        if (decodedToken.exp < currentTime) {
            // Token expirado, redirigir al login
            return <Navigate to="/login" replace />;
        }
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        AlertaService.custom("Token invalido");
        return <Navigate to="/login" replace />;
    }

    // retornamos esto si todo salio bien
    return <Outlet />;
}

export default RutaProtegida;