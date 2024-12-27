import React from 'react';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="w-1/5 h-screen border-r border-gray-300 flex flex-col items-center p-4">
            {/* Imagen circular */}
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                <img src="ruta-de-tu-imagen" alt="Perfil" className="w-full h-full object-cover rounded-full" />
            </div>
            {/* Texto debajo de la imagen */}
            <div className="text-lg font-semibold mb-4">
                Tu Nombre
            </div>
            {/* Línea horizontal */}
            <hr className="w-3/4 border-t border-gray-300 mb-4" />
            {/* Elementos del menú */}
            <ul className="list-none w-full">
                <li className="mb-4">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Inicio</span>
                    </a>
                </li>

                <li className="mb-4"> 
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"> 
                    <span>Co</span>
                        <span className="text-center flex-grow"> Entrenamiento módelo </span> 
                    </a> 
                </li>

                <li className="mb-4">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                    <span>Co</span>
                        <span>Cargar datos</span>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                    <span>Co</span>
                        <span>Preprocesamiento</span>
                    </a>
                </li>
                <li className="mb-8">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Entrenamiento módelo</span>
                    </a>
                </li>
                <li className="mb-8">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Visualización</span>
                    </a>
                </li>
                <li className="mb-8">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Reportes</span>
                    </a>
                </li>
                <li className="mb-8">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Gestión de usuarios</span>
                    </a>
                </li>
                <li className="mb-8">
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Configuración</span>
                    </a>
                </li>
                {/* Elemento separado */}
                <li>
                    <a href="#" className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Cerrar Sesión</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;