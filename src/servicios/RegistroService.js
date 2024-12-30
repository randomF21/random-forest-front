import axios from 'axios';
import env from '../environment/env'; // URL del entorno

// funcion para realizar el login
const Registro = async (credentials) => {
    try {
        // variable para el proceso, enviamos las credenciales y definimos la ruta
        const response = await axios.post(`${env.api_url}/registro/`, credentials);
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

export { Registro };