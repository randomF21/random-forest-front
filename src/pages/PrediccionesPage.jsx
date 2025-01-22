import React, { useState, useEffect } from 'react';
import SideBar from '../componentes/navegacion/sidebar';
import Navbar from '../componentes/navegacion/navbar';
import PrediccionesTable from '../componentes/PrediccionesTable';



const PrediccionesPage = () => {
    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    // asignamos que necesitamos de estos datos
    const { rol, nombre, apellido, id, imagen  } = user;
    const ruta = imagen ? `http://127.0.0.1:8000/foto_user/${imagen}` : null;
    //agrupamos nombre en una sola variable
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido

    const [isOpenSide, setIsOpenSide] = useState(false); // estado para el boton del sidebar

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto={ruta} nombreUsuario={nombreCompleto} rol={rol} isOpenSide={isOpenSide} setIsOpenSide={setIsOpenSide} />
                <div
                    className={`flex-1 transition-all duration-300 ${
                        isOpenSide ? 'ml-60' : 'ml-0'
                    }`}
                >
                    <Navbar size={'text-4xl'} titulo={'Predicciones'} />
                    <div className="lg:ml-60 mt-40 bg-white h-screen p-8">
                        <div className="flex flex-wrap gap-4 w-full mt-6">
                            <div className="bg-white p-6 rounded-lg shadow-md w-full mb-6 h-full">
                                <div className="overflow-x-auto">
                                    <PrediccionesTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrediccionesPage;