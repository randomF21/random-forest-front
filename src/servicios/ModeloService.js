import axios from 'axios';
import env from '../environment/env'; 

const ModeloService = {
    // Obtener las importancias de las características
    obtenerImportancia: async () => {
        try {
            const response = await axios.get(`${env.api_url}/feature-importance`);
            return response.data; // Devuelve los datos de la API
        } catch (error) {
            console.error('Error obteniendo importancia de características:', error);
            throw error; // Lanza el error para manejarlo en la vista
        }
    },

    // Obtener estadísticas del modelo
    obtenerEstadisticas: async () => {
        try {
            const response = await axios.get(`${env.api_url}/model-statistics`);
            return response.data; // Devuelve los datos de la API
        } catch (error) {
            console.error('Error obteniendo estadísticas del modelo:', error);
            throw error; // Lanza el error para manejarlo en la vista
        }
    },
};

export default ModeloService;
