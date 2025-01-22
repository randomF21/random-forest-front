import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from '../../servicios/LoginService';
import { Cpu, Dumbbell, Eye, FolderUp, House, LogOut, NotepadText, Settings, UserRound, Users, Upload, BookOpenText, Menu, X } from 'lucide-react';
import { EditarImagen } from '../../servicios/UsuarioService';
import { AlertaService } from '../../servicios/AlertaService';

const SideBar = ({ ruta_foto, nombreUsuario, rol, id, isOpenSide, setIsOpenSide }) => {
    // variable para movilizacion dentro del dashboard
    const location = useLocation();
    // variable para enviar a funcion externa
    const navigate = useNavigate();
    // metodo de asignacion del evento para el boton
    const handleLogout = () => {
        logout(navigate); // Llamas a la función logout
    };

    const [rutaFoto, setRutaFoto] = useState(ruta_foto); // Estado y cambio
    const [hover, setHover] = useState(false); // Estado para mostrar/ocultar el ícono
    const [selectedFile, setSelectedFile] = useState(null); // estado para el archivo
    

    // metodo para enviar el archivo
    const handleFileChange = async (e) => {
        // variable para el archivo
        const file = e.target.files[0];
        //validacion
        if (file) {
            //comprobamos tipo de archivo
            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (!allowedTypes.includes(file.type)) {
                AlertaService.error('Archivo invalido :/');
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                AlertaService.error('Maximo 2MB por imagen :/');
                return;
            }
            setSelectedFile(file); // Guarda el archivo seleccionado
        }
        const cambiarImagen = await EditarImagen(file, id);
        if (cambiarImagen) {
            const nuevaRuta = URL.createObjectURL(file); // Genera una URL temporal para la imagen seleccionada
            setRutaFoto(nuevaRuta);
            //window.location.reload();
        }
    };

    return (
        <>
            {/* Botón hamburguesa móvil */}
            <button
                onClick={() => setIsOpenSide(!isOpenSide)}
                className="fixed top-1 left-1 z-30 lg:hidden bg-[#1B4C80] text-white p-2 rounded-lg"
            >
                {isOpenSide ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay para móvil */}
            {isOpenSide && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setIsOpenSide(false)}
                />
            )}
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full flex flex-col items-center p-4 bg-[#1B4C80] text-white z-20 transition-transform duration-300 ease-in-out
                            ${isOpenSide ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-60`}
            >
                {/* Imagen circular */}
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {/* validamos si viene una imagen, si viene la colocamos, si NO viene se colcoa una por defecto*/}
                    {ruta_foto ? (
                        <img src={rutaFoto} alt="Perfil" className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <UserRound size={85} color='black' className='mb-2' />
                    )}

                    {/* Ícono de subida que aparece al hover */}
                    {hover && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-full">
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <Upload size={24} color="white" />
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
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

                    {(rol == "1" || rol == "3") && (
                        <>
                            <li className="mb-4">
                                <Link to="/predicciones" className={`flex gap-8 items-center px-4 py-2 transition-colors duration-200 rounded-lg ${location.pathname === "/predicciones"
                                    ? "bg-white text-black"
                                    : "hover:bg-white hover:text-black"
                                    }`}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-up">
                                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                                    <path d="M12 10v6" /><path d="m9 13 3-3 3 3" />
                                </svg> */}
                                    <Cpu size={24} />
                                    <span>Predicciones</span>
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
        </>
    );
};

export default SideBar;