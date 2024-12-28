import axios from 'axios';
import env from '../environment/env'; // URL del entorno
import { useNavigate } from 'react-router-dom';
import { AlertaService } from './AlertaService';

// funcion para realizar el login
const login = async (credentials) => {
    try {
        // variable para el proceso, enviamos las credenciales y definimos la ruta
        const response = await axios.post(`${env.api_url}/login/`, credentials);
        // guardamos en el local storage los datos que nos envia
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        // retornamos que salio bien
        return true;
    } catch (error) {
        // retornamos error en caso de que lo haya
        console.error('Error logging in:', error);
        throw error;
    }
};

// funcion para cerra la sesion del usuario
const logout = (navigate) => {
    sessionStorage.clear();
    sessionStorage.clear();
    navigate('/login');
    AlertaService.success('Sesión cerrada');
};

export { login, logout };