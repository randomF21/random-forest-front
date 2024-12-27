import React from 'react';
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    return (
        <div className="w-60 fixed top-0 left-0 h-screen flex flex-col items-center p-4 bg-[#1B4C80] text-white z-20">
            {/* Imagen circular */}
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                <img src="ruta-de-tu-imagen" alt="Perfil" className="w-full h-full object-cover rounded-full" />
            </div>
            {/* Texto debajo de la imagen */}
            <div className="text-lg font-semibold mb-3">
                Tu Nombre
            </div>
            {/* Línea horizontal */}
            <hr className="w-3/4 border-t border-gray-300 mb-10" />
            {/* Elementos del menú */}
            <ul className="list-none w-full">
                <li className="mb-4">
                    <Link to="/dashboard" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${
                            location.pathname === "/dashboard"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                        }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                        <span>Inicio</span>
                    </Link>
                </li>

                <li className="mb-4"> 
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"> 
                    <span>Co</span>
                        <span className="text-center flex-grow"> Entrenamiento módelo </span> 
                    </a> 
                </li>

                <li className="mb-4">
                    <Link to="/cargar-datos" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${
                            location.pathname === "/cargar-datos"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                        }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-up">
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                            <path d="M12 10v6" /><path d="m9 13 3-3 3 3" />
                        </svg>
                        <span>Cargar datos</span>
                    </Link>
                </li>
                {/* <li className="mb-4">
                    <Link to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Preprocesamiento</span>
                    </Link>
                </li>
                <li className="mb-8">
                    <a to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Entrenamiento módelo</span>
                    </a>
                </li>
                <li className="mb-8">
                    <Link to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Reportes</span>
                    </Link>
                </li> */}
                <li className="mb-8">
                    <Link to="/usuarios" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${
                            location.pathname === "/usuarios"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                        }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>Usuarios</span>
                    </Link>
                </li>
                {/* <li className="mb-8">
                    <Link to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                        <span>Co</span>
                        <span>Configuración</span>
                    </Link>
                </li> */}
                {/* Elemento separado */}
                <li>
                    <a href="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
                        </svg>
                        <span>Cerrar Sesión</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;