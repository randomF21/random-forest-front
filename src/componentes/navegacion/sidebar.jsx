import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from '../../servicios/LoginService';
import { Cpu, Dumbbell, Eye, FolderUp, House, LogOut, NotepadText, Settings, UserRound, Users } from 'lucide-react';

const SideBar = ({ ruta_foto, nombreUsuario, rol }) => {
    // variable para movilizacion dentro del dashboard
    const location = useLocation();
    // variable para enviar a funcion externa
    const navigate = useNavigate();
    // metodo de asignacion del evento para el boton
    const handleLogout = () => {
        logout(navigate); // Llamas a la función logout
    };
    return (
        <div className="w-60 fixed top-0 left-0 h-screen flex flex-col items-center p-4 bg-[#1B4C80] text-white z-20">
            {/* Imagen circular */}
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                {/* validamos si viene una imagen, si viene la colocamos, si NO viene se colcoa una por defecto*/}
                {ruta_foto ? (
                    <img src={ruta_foto} alt="Perfil" className="w-full h-full object-cover rounded-full" />
                ) : (
                    <UserRound size={85} color='black' className='mb-2' />
                )}
            </div>

            {/* Texto debajo de la imagen */}
            <div className="text-lg font-semibold mb-3">
                {nombreUsuario}
            </div>

            {/* Línea horizontal */}
            <hr className="w-5/6 border-t border-gray-300 mb-10" />
            {/* Elementos del menú */}
            <ul className="list-none w-full">


                {(rol == "1" || rol == "2") && (
                    <>
                        <li className="mb-4">
                            <Link to="/dashboard" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${location.pathname === "/dashboard"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                                }`}>
                                <House size={24} />
                                <span>Inicio</span>
                            </Link>
                        </li>
                    </>
                )}

                {rol == "1" && (
                    <>
                        <li className="mb-4">
                            <Link to="/cargar-datos" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${location.pathname === "/cargar-datos"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                                }`}>
                                <FolderUp />
                                <span>Cargar datos</span>
                            </Link>
                        </li>
                    </>
                )}
                
                {rol == "3" && (
                    <>
                        <li className="mb-4">
                            <Link to="/formulario" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${location.pathname === "/formulario"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                                }`}>
                                <BookOpenText />
                                <span>Formulario</span>
                            </Link>
                        </li>
                    </>
                )}

                {/* {rol == "1" && (
                    <>
                        <li className="mb-4">
                            <Link to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                                <Cpu size={24} />
                                <span className='break-normal'>Preprocesami- ento</span>
                            </Link>
                        </li>

                        <li className="mb-4">
                            <Link href="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                                <Dumbbell size={30} />
                                <span className='break-normal' >Entrenamiento módelo</span>
                            </Link>
                        </li>
                    </>
                )} */}

                {/* {(rol == "1" || rol == "2") && (
                    <>
                        <li className="mb-4">
                            <Link href="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                                <Eye size={24} />
                                <span>Visualización</span>
                            </Link>
                        </li>

                        <li className="mb-4">
                            <Link to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                                <NotepadText size={24} />
                                <span>Reportes</span>
                            </Link>
                        </li>
                    </>
                )} */}

                {rol == "1" && (
                    <>
                        <li className="mb-4">
                            <Link to="/usuarios" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${location.pathname === "/usuarios"
                                ? "bg-white text-black"
                                : "hover:bg-white hover:text-black"
                                }`}>
                                <Users size={24} />
                                <span className='break-normal' >Gestión de Usuarios</span>
                            </Link>
                        </li>
                        
                        {/* <li className="mb-4">
                            <Link to="#" className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg">
                                <Settings size={24} />
                                <span>Configuración</span>
                            </Link>
                        </li> */}
                    </>
                )}

                {/* Elemento separado */}
                <li className="mt-8">
                    <a onClick={handleLogout} className="flex gap-8 items-center px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200 rounded-lg cursor-pointer">
                        <LogOut size={24} />

                        <span>Cerrar Sesión</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;