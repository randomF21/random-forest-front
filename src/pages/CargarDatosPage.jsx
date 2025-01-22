import React, { useState, useEffect } from "react";
import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";
import ModeloService from '../servicios/modeloService';


import subir from '../assets/imagenes/subir.webp';

const CargarDatosPage = () => {
    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario
    // asignamos que necesitamos de estos datos
    const { rol, nombre, apellido, id, imagen } = user;
    const ruta = imagen ? `http://127.0.0.1:8000/foto_user/${imagen}` : null;
    //agrupamos nombre en una sola variable
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido
    
    const [predictions, setPredictions] = useState([]);
    const [isOpenSide, setIsOpenSide] = useState(false); // estado para el boton del sidebar


    // Servicio para cargar fechas de predicciones
    const cargarFechasPredicciones = async () => {
        try {
            const response = await ModeloService.cargarFechasPredicciones();
            console.log(response.fechas_disponibles)
            setPredictions(response.fechas_disponibles); // Actualiza las predicciones en el estado

        } catch (err) {
            console.error("Error al cargar las fechas de predicciones", err);
            setError("Error al cargar las fechas de predicciones");
        }
    };

    // Llama al servicio al montar el componente
    useEffect(() => {
        cargarFechasPredicciones();
    }, []);

    const fileInputRef = React.useRef(null);

    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Abre el explorador de archivos
        }
    };

    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = React.useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setFile(event.target.files[0]);
            setError('');
            setSuccessMessage('');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Por favor, selecciona un archivo.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            console.log('Subiendo archivo:', file);
            const response = await ModeloService.cargarCsv(formData);
            console.log('Respuesta del servidor:', response.data);
            setSuccessMessage('Archivo cargado y procesado con éxito.');
        } catch (error) {
            console.error('Error al procesar el archivo:', error);
            setError('Error al procesar el archivo. ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto={ruta} nombreUsuario={nombreCompleto} rol={rol} isOpenSide={isOpenSide} setIsOpenSide={setIsOpenSide} id={id} />
                <div
                    className={`flex-1 transition-all duration-300 ${
                        isOpenSide ? 'ml-60' : 'ml-0'
                    }`}
                >
                    <Navbar size={'text-3xl'} titulo={'Cargar datos'} />
                    <div className="flex flex-col lg:flex-row lg:ml-60 mt-32 lg:mt-10 bg-white min-h-screen">
                        {/* Sección de carga de archivos */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4">
                            <h1 className="text-4xl font-semibold mb-6">Cargue el archivo</h1>
                            <div
                                className="w-80 h-96 bg-[#F0F0F0] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#e7e6e6]"
                                onClick={handleFileClick}
                            >
                                <img src={subir} alt="Cargar archivos" className="w-56" />
                                <p className="mt-4 text-center text-black font-semibold text-xl">
                                    Cargue un documento<br />Excel
                                </p>
                            </div>
                            {/* Mostrar el nombre del archivo seleccionado */}
                            {fileName && (
                                <p className="mt-4 text-center text-black font-semibold text-lg">
                                    Archivo seleccionado: <span className="text-blue-500">{fileName}</span>
                                </p>
                            )}
                            <button
                                className={`mt-4 px-6 py-1 text-white text-lg rounded-lg ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#2B6CB0] hover:bg-[#125fb0]"
                                    }`}
                                onClick={handleUpload}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center">
                                        <span className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full mr-2"></span>
                                        Procesando...
                                    </span>
                                ) : (
                                    "Subir y Procesar"
                                )}
                            </button>

                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                            />

                            {/* Mensajes de error o éxito */}
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                        </div>

                        {/* Sección de tabla de predicciones */}
                        <div className="w-full lg:w-1/2 mt-24 p-6 overflow-y-auto">
                            <h2 className="text-2xl font-semibold mb-4">Historial de Predicciones</h2>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="sticky top-0 bg-gray-100">
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-2 py-2">Fechas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {predictions.map((prediction, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-2">
                                                {new Date(prediction).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CargarDatosPage;
