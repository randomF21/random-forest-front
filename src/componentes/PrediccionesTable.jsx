import React, { useEffect, useState } from "react";
import ModeloService from "../servicios/modeloService";
import ReactPaginate from "react-paginate"; // Importar ReactPaginate

const PrediccionesTable = () => {
    const [predicciones, setPredicciones] = useState([]);
    const [fechas, setFechas] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const cargarDatosIniciales = async () => {
            try {
                setLoading(true);

                const responseFechas = await ModeloService.cargarFechasPredicciones();
                setFechas(responseFechas.fechas_disponibles || []);

                const responsePredicciones = await ModeloService.obtenerPrediccionesModeloEntrenado();
                setPredicciones(responsePredicciones.predictions || []);
            } catch (error) {
                setError("Error al cargar datos iniciales: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        cargarDatosIniciales();
    }, []);

    const handleFechaChange = async (event) => {
        const fecha = event.target.value;
        setFechaSeleccionada(fecha);

        try {
            setLoading(true);
            if (fecha) {
                const response = await ModeloService.cargarPredicciones(fecha);
                setPredicciones(response.data || []);
            } else {
                const response = await ModeloService.obtenerPrediccionesModeloEntrenado();
                setPredicciones(response.predictions || []);
            }
        } catch (error) {
            setError("Error al cargar predicciones: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDescargarExcel = async () => {
        if (!fechaSeleccionada) {
            alert('Por favor, seleccione una fecha.');
            return;
        }

        try {
            await ModeloService.descargarExcel(fechaSeleccionada);
            alert('Archivo Excel descargado exitosamente.');
        } catch (error) {
            console.error('Error al descargar el archivo Excel:', error);
            alert('Error al descargar el archivo Excel. Por favor, inténtelo de nuevo.');
        }
    };

    const handleDescargarPDF = async () => {
        if (!fechaSeleccionada) {
            alert('Por favor, seleccione una fecha.');
            return;
        }

        try {
            await ModeloService.descargarPDF(fechaSeleccionada);
            alert('Archivo PDF descargado exitosamente.');
        } catch (error) {
            console.error('Error al descargar el archivo PDF:', error);
            alert('Error al descargar el archivo PDF. Por favor, inténtelo de nuevo.');
        }
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1); // ReactPaginate empieza en 0, así que sumamos 1
    };

    if (error) {
        return <p>{error}</p>;
    }

    if (loading) {
        return <p>Cargando datos...</p>;
    }

    if (!predicciones || predicciones.length === 0) {
        return <p>No hay predicciones disponibles.</p>;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = predicciones.slice(startIndex, endIndex);

    const totalPages = Math.ceil(predicciones.length / itemsPerPage);

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-center mb-4">Predicciones</h2>

            <div className="mb-4">
                <label htmlFor="fechas" className="block text-lg font-bold mb-2">
                    Seleccione una fecha:
                </label>
                <div className="flex items-center space-x-4">
                    {/* Select para fechas */}
                    <select
                        id="fechas"
                        className="border rounded-lg p-2 flex-grow"
                        value={fechaSeleccionada}
                        onChange={handleFechaChange}
                    >
                        <option value="">Datos de Entrenamiento</option>
                        {fechas.map((fecha, index) => (
                            <option key={index} value={fecha}>
                                {fecha}
                            </option>
                        ))}
                    </select>

                    {/* Botones de descarga */}
                    <button
                        onClick={handleDescargarExcel}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Descargar Excel
                    </button>
                    <button
                        onClick={handleDescargarPDF}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Descargar PDF
                    </button>
                </div>
            </div>

            <div className="flex mb-2 text-center bg-gray-200 font-semibold">
                <div className="px-4 py-2 w-1/6">Edad</div>
                <div className="px-4 py-2 w-1/6">Sexo</div>
                <div className="px-4 py-2 w-1/6">Escolaridad</div>
                <div className="px-4 py-2 w-1/6">Estrato</div>
                <div className="px-4 py-2 w-1/6">Predicción</div>
                <div className="px-4 py-2 w-1/6">Probabilidad (Clase 1)</div>
            </div>

            {paginatedData.map((prediccion, index) => (
                <div
                    key={index}
                    className={`flex items-center text-center border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                >
                    <div className="px-4 py-2 w-1/6">
                        {prediccion.edad || prediccion.EDAD || "N/A"}
                    </div>
                    <div className="px-4 py-2 w-1/6">
                        {prediccion.sexo_biologico || prediccion.SEXO_BIOLOGICO || "N/A"}
                    </div>
                    <div className="px-4 py-2 w-1/6">
                        {prediccion.escolaridad || prediccion.ESCOLARIDAD || "N/A"}
                    </div>
                    <div className="px-4 py-2 w-1/6">
                        {prediccion.estrato_socioeconomico || prediccion.ESTRATO_SOCIOECONOMICO || "N/A"}
                    </div>
                    <div className="px-4 py-2 w-1/6">
                        {prediccion.prediccion || prediccion.Prediccion || "N/A"}
                    </div>
                    <div className="px-4 py-2 w-1/6">
                        {prediccion.probabilidad_clase_1 !== undefined &&
                            prediccion.probabilidad_clase_1 !== null
                            ? prediccion.probabilidad_clase_1.toFixed(2)
                            : prediccion.Probabilidad_Clase_1 !== undefined &&
                                prediccion.Probabilidad_Clase_1 !== null
                                ? prediccion.Probabilidad_Clase_1.toFixed(2)
                                : "N/A"}
                    </div>
                </div>
            ))}

            {/* Paginación con ReactPaginate */}
            <ReactPaginate
                previousLabel={"Anterior"}
                nextLabel={"Siguiente"}
                breakLabel={"..."}
                pageCount={totalPages}
                onPageChange={handlePageClick}
                forcePage={currentPage - 1} // Ajusta la página actual (ReactPaginate empieza en 0)
                containerClassName="flex justify-center items-center space-x-2 mt-4"
                pageClassName="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                previousClassName="px-4 py-2 bg-[#2B6CB0] text-white rounded-md hover:bg-blue-700 cursor-pointer"
                nextClassName="px-4 py-2 bg-[#2B6CB0] text-white rounded-md hover:bg-blue-700 cursor-pointer"
                breakClassName="px-4 py-2 text-gray-500"
                activeClassName="bg-blue-700 text-white"
            />
        </div>
    );
};

export default PrediccionesTable;