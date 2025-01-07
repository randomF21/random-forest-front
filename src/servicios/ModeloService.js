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


    obtenerPrediccionesModeloEntrenado: async () => {
        const response = await axios.get(`${env.api_url}/generate-predictions`);
        return response.data;
    },

    cargarCsv: (formData) => {
        return axios.post(`${env.api_url}/cargar-csv/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    cargarPredicciones: async () => {
        try {
            const response = await axios.get(`${env.api_url}/cargar-predicciones`);
            return response;
        } catch (error) {
            console.log('Error obteniendo predicciones: ', error);
            throw error;
        }
    },

    cargarFechasPredicciones: async () => {
        const response = await axios.get(`${env.api_url}/fechas-predicciones`);
        return response.data;
    },

    // Este método ahora solo se usa cuando se selecciona una fecha
    cargarPredicciones: async (fecha) => {
        const response = await axios.get(`${env.api_url}/cargar-predicciones/?fecha=${fecha}`);
        return response.data;
    }

};

export default ModeloService;
