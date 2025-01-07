import React, { useState } from "react";
import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";
import modeloService from '../servicios/modeloService';

import subir from '../assets/imagenes/subir.webp';

const CargarDatosPage = () => {
    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido

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

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setError('');
        setSuccessMessage('');
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
            const response = await modeloService.cargarCsv(formData);
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
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Cargar datos'} />
                    <div className="ml-60 mt-10 bg-white h-screen flex flex-col items-center justify-center">
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
                        <button
                            className={`mt-4 px-6 py-1 text-white text-lg rounded-lg ${
                                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#2B6CB0] hover:bg-[#125fb0]"
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
                </div>
            </div>
        </>
    );
};

export default CargarDatosPage;
