import React, { useEffect, useState } from "react";
import ModeloService from "../servicios/modeloService";

const PrediccionesTable = () => {
  const [predicciones, setPredicciones] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const cargarPredicciones = async () => {
      try {
        const response = await ModeloService.obtenerPredicciones();
        setPredicciones(response.predictions);
      } catch (error) {
        setError("Error al cargar las predicciones: " + error.message);
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

  // Calcular índices para la paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = predicciones.slice(startIndex, endIndex);

  const totalPages = Math.ceil(predicciones.length / itemsPerPage);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-center mb-4">Predicciones</h2>

      {/* Header */}
      <div className="flex mb-2 text-center bg-gray-200 font-semibold">
        <div className="px-4 py-2 w-1/6">Edad</div>
        <div className="px-4 py-2 w-1/6">Sexo</div>
        <div className="px-4 py-2 w-1/6">Escolaridad</div>
        <div className="px-4 py-2 w-1/6">Estrato</div>
        <div className="px-4 py-2 w-1/6">Predicción</div>
        <div className="px-4 py-2 w-1/6">Probabilidad (Clase 1)</div>
      </div>

      {/* Rows */}
      {paginatedData.map((prediccion, index) => (
        <div
          key={index}
          className={`flex items-center text-center border-b ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="px-4 py-2 w-1/6">{prediccion.EDAD}</div>
          <div className="px-4 py-2 w-1/6">{prediccion.SEXO_BIOLOGICO}</div>
          <div className="px-4 py-2 w-1/6">{prediccion.ESCOLARIDAD}</div>
          <div className="px-4 py-2 w-1/6">{prediccion.ESTRATO_SOCIOECONOMICO}</div>
          <div className="px-4 py-2 w-1/6">{prediccion.Prediccion}</div>
          <div className="px-4 py-2 w-1/6">
            {prediccion.Probabilidad_Clase_1.toFixed(2)}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="px-4 py-2">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PrediccionesTable;
