import axios from 'axios';
import env from '../environment/env'; // URL del entorno
import { getToken } from './AuthService';

//buscamos el token 
const token = getToken();
// configuramos el header para la autorizacion
const autorizacion = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
};

// funcion para realizar la insercion de usuarios SUPER ADMIN o ADMIN
const InsertarUsuario = async (credentials) => {
    
    // definimos valores para cambiar por el del rol
    const rolMap = {
        'superadmin':1,
        'admin':2
    }
    credentials.rol = rolMap[credentials.rol] || credentials.rol;

    try {
        // variable para el proceso, enviamos las credenciales y definimos la ruta
        const response = await axios.post(`${env.api_url}/usuario/`, credentials, autorizacion);
        // guardamos en el local storage los datos que nos envia
        console.log(response)
        // retornamos que salio bien
        return true;
    } catch (error) {
        // retornamos error en caso de que lo haya
        console.error('Error logging in:', error);
        throw error;
    }
};

const TraerUsuario = async () => {
    try {
        const response = axios.get(`${env.api_url}/usuario/`, autorizacion);
        return response;
    } catch (error) {
        console.error('Error al traer los usuarios:', error);
        throw error;
    }
}

export { InsertarUsuario, TraerUsuario };