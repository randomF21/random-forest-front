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
    },

    realizarPrediccion: async (datos) => {
        return await axios.post(`${env.api_url}/realizar-prediccion`, datos);
    },

    descargarExcel: async (fecha) => {
        try {
            const response = await axios.get(`${env.api_url}/descargar-predicciones-excel`, {
                params: { fecha },
                responseType: 'blob', // Importante para manejar archivos binarios
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `predicciones_${fecha || 'entrenamiento'}.xlsx`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error al descargar el archivo Excel:', error);
            throw error;
        }
    },

    descargarPDF: async (fecha) => {
        try {
            const response = await axios.get(`${env.api_url}/descargar-predicciones-pdf`, {
                params: { fecha },
                responseType: 'blob', // Específico para archivos binarios
            });
            if (response.status === 200) {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `predicciones_${fecha || 'entrenamiento'}.pdf`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                throw new Error('El servidor respondió con un estado inesperado.');
            }
        } catch (error) {
            console.error('Error en el servicio de descarga de PDF:', error);
            throw error;
        }
    },
    

};

export default ModeloService;
