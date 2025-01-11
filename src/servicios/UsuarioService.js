import axios from 'axios';
import env from '../environment/env'; // URL del entorno
import { getAutorizacion, getAutorizacionImg, setUser } from './AuthService';
import { AlertaService } from './AlertaService';


// obtenemos la autorizacion con el metodo

// funcion para realizar la insercion de usuarios SUPER ADMIN o ADMIN
const InsertarUsuario = async (credentials) => {
    const autorizacion = getAutorizacion();
    
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
    const autorizacion = getAutorizacion();
    try {
        const response = axios.get(`${env.api_url}/usuario/`, autorizacion);
        return response;
    } catch (error) {
        console.error('Error al traer los usuarios:', error);
        throw error;
    }
}

const EditarImagen = async (imagen, id) => {
    const formData = new FormData();
    formData.append('imagen', imagen);
    const autorizacionImg = getAutorizacionImg();
    AlertaService.loading('a',);

    try {
        const response = await axios.put(`${env.api_url}/usuario/${id}/act-img/`, formData, autorizacionImg);
        AlertaService.quitar();
        AlertaService.success('Imagen actualizada :D');
        setUser(response.data.usuario);
        return response;
    } catch (error) {
        AlertaService.quitar();
        AlertaService.error('Ocurrido un error :c');
        throw error;
    }
}

export { InsertarUsuario, TraerUsuario, EditarImagen };