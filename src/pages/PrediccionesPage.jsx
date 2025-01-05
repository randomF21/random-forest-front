import React, { useState, useEffect } from 'react';
import SideBar from '../componentes/navegacion/sidebar';
import Navbar from '../componentes/navegacion/navbar';
import PrediccionesTable from '../componentes/PrediccionesTable';



const PrediccionesPage = () => {
    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className="w-full">
                    <Navbar titulo={'Bienvenid@'} />
                    <div className="ml-60 mt-40 bg-white h-screen p-8">
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