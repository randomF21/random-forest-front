import React, { useEffect, useState } from 'react';
import ModeloService from '../servicios/modeloService';

const PrediccionesTable = () => {
    const [predicciones, setPredicciones] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarPredicciones = async () => {
            try {
                const response = await ModeloService.obtenerPredicciones();
                setPredicciones(response.predictions);
            } catch (error) {
                setError('Error al cargar las predicciones: ' + error.message);
            }
        };

        cargarPredicciones();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!predicciones.length) {
        return <p>Cargando predicciones...</p>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-center mb-4">Predicciones</h2>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Edad</th>
                        <th className="border px-4 py-2">Sexo</th>
                        <th className="border px-4 py-2">Escolaridad</th>
                        <th className="border px-4 py-2">Estrato</th>
                        <th className="border px-4 py-2">Predicción</th>
                        <th className="border px-4 py-2">Probabilidad (Clase 1)</th>
                    </tr>
                </thead>
                <tbody>
                    {predicciones.map((prediccion, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{prediccion.EDAD}</td>
                            <td className="border px-4 py-2">{prediccion.SEXO_BIOLOGICO}</td>
                            <td className="border px-4 py-2">{prediccion.ESCOLARIDAD}</td>
                            <td className="border px-4 py-2">{prediccion.ESTRATO_SOCIOECONOMICO}</td>
                            <td className="border px-4 py-2">{prediccion.Prediccion}</td>
                            <td className="border px-4 py-2">{prediccion.Probabilidad_Clase_1.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrediccionesTable;
