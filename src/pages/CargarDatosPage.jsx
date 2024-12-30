import React from "react";
import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";

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
    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Cargar datos'} />
                    <div className="ml-60 bg-white h-screen flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-semibold mb-6">Cargue el archivo</h1>
                        <div className="w-80 h-96 bg-[#F0F0F0] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#e7e6e6]"
                            onClick={handleFileClick}>
                            <img src={subir} alt="Cargar archivos" className="w-56" />
                            <p className="mt-4 text-center text-black font-semibold text-xl">
                                Cargue un documento<br />Excel
                            </p>
                        </div>
                        <button className="mt-4 px-6 py-1 bg-[#2B6CB0] text-white text-lg rounded-lg hover:bg-[#125fb0]" onClick={handleFileClick}>
                            Cargar
                        </button>
                        <input type="file" ref={fileInputRef} className="hidden"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CargarDatosPage;