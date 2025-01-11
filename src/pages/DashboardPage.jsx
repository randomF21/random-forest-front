import React, { useState, useEffect } from "react";
import SideBar from "../componentes/navegacion/sidebar";
import Navbar from "../componentes/navegacion/navbar";
import ModeloService from "../servicios/modeloService";
import CurvaROC from "../componentes/CurvaRoc";
import SuicidioPorGenero from "../componentes/SuicidioPorGenero";
import EstratoSocioeconomicoChart from "../componentes/EstratoSocioeconomicoChart";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

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
    const user = JSON.parse(sessionStorage.getItem("usuario")); // Suponiendo que guardas un objeto con los datos del usuario
    const { rol, nombre, apellido } = user;
    const nombreCompleto = `${nombre} ${apellido}`;

    const [stats, setStats] = useState(null);
    const [estadisticas, setEstadisticas] = useState(null);
    const [rocData, setRocData] = useState(null);
    const [confusionMatrix, setConfusionMatrix] = useState(null);
    const [fechas, setFechas] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarDatosIniciales = async () => {
            try {
                // Obtener estadísticas iniciales del modelo entrenado
                const responseEntrenamiento = await ModeloService.obtenerEstadisticas();
                setConfusionMatrix(responseEntrenamiento.confusion_matrix);
                setRocData(responseEntrenamiento.roc_curve);
                
                // Obtener las estadísticas iniciales del modelo
                const responseModelo = await ModeloService.obtenerPrediccionesModeloEntrenado();
                setStats(responseModelo);
                setEstadisticas(responseModelo.stats);

                // Obtener solo el listado de fechas disponibles
                const responseFechas = await ModeloService.cargarFechasPredicciones();
                setFechas(responseFechas.fechas_disponibles || []);
            } catch (error) {
                setError("Error al cargar estadísticas iniciales: " + error.message);
            }
        };

        cargarDatosIniciales();
    }, []);

    const handleFechaChange = async (e) => {
        const fecha = e.target.value;
        setFechaSeleccionada(fecha);

        try {
            if (!fecha) {
                // Volver a las estadísticas del modelo entrenado
                const responseModelo = await ModeloService.obtenerPrediccionesModeloEntrenado();
                setStats(responseModelo);
                setEstadisticas(responseModelo.stats);
                 // Actualizar matriz de confusión y curva ROC con datos originales
                 const responseEntrenamiento = await ModeloService.obtenerEstadisticas();
                 setConfusionMatrix(responseEntrenamiento.confusion_matrix);
                 setRocData(responseEntrenamiento.roc_curve);
                 
            } else {
                // Solo cargar predicciones cuando se selecciona una fecha
                const responsePredicciones = await ModeloService.cargarPredicciones(fecha);
                setStats(responsePredicciones.data);
                setEstadisticas(responsePredicciones.stats);
            }
        } catch (error) {
            setError(`Error al cargar estadísticas: ${error.message}`);
        }
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (!stats || !rocData) {
        return <p>Cargando datos...</p>;
    }



    const prediccionData = {
        labels: Object.keys(estadisticas.prediccion),
        datasets: [
            {
                data: Object.values(estadisticas.prediccion),
                backgroundColor: ["#FF6384", "#36A2EB"],
            },
        ],
    };

    const generoData = {
        labels: Object.keys(estadisticas.genero),
        datasets: [
            {
                data: Object.values(estadisticas.genero),
                backgroundColor: ["#FF6384", "#FFCE56"],
            },
        ],
    };

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className="w-full">
                    <Navbar titulo={"Bienvenid@"} />
                    <div className="ml-60 mt-40 bg-white h-screen p-8">
                        <div className="p-8 w-full min-h-screen">
                            <div className="max-w-7xl mx-auto space-y-6">
                                {/* Select para fechas */}
                                <div className="mb-4">
                                    <label htmlFor="fechas" className="block text-lg font-bold mb-2">
                                        Seleccione una fecha para ver las estadísticas:
                                    </label>
                                    <select
                                        id="fechas"
                                        className="border rounded-lg p-2 w-full"
                                        onChange={handleFechaChange}
                                    >
                                        <option value="">Datos de Entrenamiento</option>
                                        {fechas.map((fecha, index) => (
                                            <option key={index} value={fecha}>
                                                {fecha}
                                            </option>
                                        ))}
                                    </select>
                                </div>

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
                                                        {confusionMatrix.columns.map((col, index) => (
                                                            <th key={index} className="border px-3 py-2">
                                                                {col}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {confusionMatrix.data.map((row, rowIndex) => (
                                                        <tr key={rowIndex}>
                                                            <td className="border px-3 py-2">
                                                                {confusionMatrix.index[rowIndex]}
                                                            </td>
                                                            {row.map((cell, cellIndex) => (
                                                                <td
                                                                    key={cellIndex}
                                                                    className="border px-3 py-2 text-center"
                                                                >
                                                                    {cell}
                                                                </td>
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
                                            <CurvaROC rocData={rocData} />
                                        </div>
                                    </div>
                                </div>

                                {/* Fila 2: Gráficas de predicciones */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-xl font-bold mb-4 text-center">Predicciones</h3>
                                        <div className="h-64">
                                            <Pie data={prediccionData} options={{ maintainAspectRatio: false }} />
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-xl font-bold mb-4 text-center">Genero</h3>
                                        <div className="h-64">
                                            <Pie data={generoData} options={{ maintainAspectRatio: false }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Fila 3: Gráficas de predicciones */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="h-64">
                                            <SuicidioPorGenero data={estadisticas.tasa_suicidio_genero} />
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <div className="h-64">
                                            <EstratoSocioeconomicoChart data={estadisticas.estrato} />
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
