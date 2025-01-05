import React, { useState, useEffect } from 'react';
import SideBar from '../componentes/navegacion/sidebar';
import Navbar from '../componentes/navegacion/navbar';
import ModeloService from '../servicios/modeloService';
import CurvaROC from '../componentes/CurvaRoc';
import SuicidioPorGenero from '../componentes/SuicidioPorGenero';
import EstratoSocioeconomicoChart from '../componentes/EstratoSocioeconomicoChart';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    Title
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registrar elementos necesarios
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    Title
);


const DashboardPage = () => {

    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido

    const [estadisticas, setEstadisticas] = useState(null);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const cargarEstadisticas = async () => {
            try {
                const data = await ModeloService.obtenerEstadisticas();
                setEstadisticas(data); // Guarda las estadísticas en el estado
            } catch (error) {
                setError('Error al cargar estadísticas del modelo');
            }
        };

        const cargarPredicciones = async () => {
            try {
                const response = await ModeloService.obtenerPredicciones();
                setStats(response.stats);
            } catch (error) {
                setError('Error al cargar predicciones: ' + error.message);
            }
        };

        cargarPredicciones();
        cargarEstadisticas();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!stats || !estadisticas) {
        return <p>Cargando Datos...</p>;
    }

    const prediccionData = {
        labels: Object.keys(stats.prediccion),
        datasets: [
            {
                data: Object.values(stats.prediccion),
                backgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    };

    const generoData = {
        labels: Object.keys(stats.genero),
        datasets: [
            {
                data: Object.values(stats.genero),
                backgroundColor: ['#FF6384', '#FFCE56']
            }
        ]
    };


    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Bienvenid@'} />
                    <div className="ml-60 mt-40 bg-white h-screen p-8">
                        <div className="p-8 w-full min-h-screen">
                            {/* Container con márgenes ajustados */}
                            <div className="max-w-7xl mx-auto space-y-6">
                                {/* Fila 1: Matriz de Confusión y Curva ROC */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Matriz de Confusión */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h2 className="text-xl font-bold mb-4 text-center">Matriz de Confusión</h2>
                                        <div className="overflow-x-auto">
                                            <table className="w-full table-auto border-collapse border border-gray-300">
                                                <thead>
                                                    <tr>
                                                        <th className="border px-3 py-2"></th>
                                                        {estadisticas.confusion_matrix.columns.map((col, index) => (
                                                            <th key={index} className="border px-3 py-2">{col}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {estadisticas.confusion_matrix.data.map((row, rowIndex) => (
                                                        <tr key={rowIndex}>
                                                            <td className="border px-3 py-2">{estadisticas.confusion_matrix.index[rowIndex]}</td>
                                                            {row.map((cell, cellIndex) => (
                                                                <td key={cellIndex} className="border px-3 py-2 text-center">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Curva ROC */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="h-64">
                                            <CurvaROC rocData={estadisticas.roc_curve} />
                                        </div>
                                    </div>
                                </div>

                                {/* Fila 2: Predicciones y Tipo de Persona */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Predicciones */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-xl font-bold mb-4 text-center">Predicciones</h3>
                                        <div className="h-64">
                                            <Pie
                                                data={prediccionData}
                                                options={{
                                                    maintainAspectRatio: false,
                                                    responsive: true
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Tipo de Persona */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-xl font-bold mb-4 text-center">Tipo de Persona</h3>
                                        <div className="h-64">
                                            <Pie
                                                data={generoData}
                                                options={{
                                                    maintainAspectRatio: false,
                                                    responsive: true
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Fila 3: Predicciones y Tipo de Persona */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Predicciones */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="h-64">
                                        <SuicidioPorGenero data={stats.tasa_suicidio_genero} />

                                        </div>
                                    </div>

                                    {/* Tipo de Persona */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="h-64">
                                        <EstratoSocioeconomicoChart data={stats.estrato} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;