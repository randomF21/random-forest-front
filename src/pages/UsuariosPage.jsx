import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";
import AgregarUsuarioModal from "../componentes/modal/AgregarUsuario";
import { TraerUsuario } from "../servicios/UsuarioService";

import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import { Trash2, UserPen } from "lucide-react";

const UsuariosPage = () => {
    // guardamos los datos en una varible
    const user = JSON.parse(sessionStorage.getItem('usuario'));
    // asignamos que necesitamos de estos datos
    const { rol, nombre, apellido, id, imagen } = user;
    const ruta = imagen ? `http://127.0.0.1:8000/foto_user/${imagen}` : null;
    //agrupamos nombre en una sola variable
    const nombreCompleto = `${nombre} ${apellido}`;
    // definimos y alternamos el estado de la modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpenSide, setIsOpenSide] = useState(false); // estado para el boton del sidebar

    // funcion para abrir
    const openModal = () => {
        setIsModalOpen(true);
    };
    // funcion para cerrar
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // definimos variables para la coleccion de usuarios
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        const buscarUsuario = async () => {
            try {
                const usuariosData = await TraerUsuario();
                setUsuario(usuariosData.data);
            } catch (error) {
                console.error('Error al traer los usuarios', error);
            }
        };
        buscarUsuario();
    }, []);

    const asignarNombreRol = (rol) => {
        switch (rol){
            case 1: 
                return "Superadmin";
            case 2: 
                return "Administrador";
            case 3: 
                return "Usuario";
            default: 
                return "Sin rol";
        }
    }

    // CONFIGURACION DE LA PAGINACION 
    // Estado para la página actual
    const [paginaActual, setPaginaActual] = useState(0);

    // Número de usuarios por página
    const usuariosPorPagina = 8;

    // Manejo del cambio de página
    const handlePageClick = (data) => {
        setPaginaActual(data.selected); // Establece la página seleccionada
    };

    // Calcular los usuarios a mostrar en la página actual
    const usuariosPagina = usuario.slice(
        paginaActual * usuariosPorPagina,
        (paginaActual + 1) * usuariosPorPagina
    );


    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto={ruta} nombreUsuario={nombreCompleto} rol={rol} id={id} isOpenSide={isOpenSide} setIsOpenSide={setIsOpenSide} />
                <div
                    className={`flex-1 transition-all duration-300 ${
                        isOpenSide ? 'ml-60' : 'ml-0'
                    }`}
                >
                    <Navbar size={'text-4xl'} titulo={'Usuarios'} />
                    <div className="lg:ml-60 mt-32 bg-white h-screen p-2 lg:p-8">
                        <div className="overflow-x-auto w-11/12 mx-auto">
                            <button onClick={openModal}
                                className="bg-[#2B6CB0] p-2 text-white rounded-lg mb-10 hover:bg-[#125fb0]">
                                Crear nuevo usuario
                            </button>
                            <div className="flex mb-2 text-center">
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Correo Electronico</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Nombre</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Rol</div>
                                {/* <div className="px-4 py-2 text-lg font-semibold w-1/3">Estado</div> */}
                                {/* <div className="px-4 py-2 text-lg font-semibold w-1/3">Editar</div> */}
                                {/* <div className="px-4 py-2 text-lg font-semibold w-1/3">Eliminar</div> */}
                            </div>

                            {/* Renderiza los usuarios */}
                            {usuariosPagina.map((usuario) => (
                                <div key={usuario.id} className="flex mb-4 bg-[#F2F2F2] rounded-lg mx-auto items-center text-center">
                                    <div className="px-4 py-2 text-lg w-1/3 truncate" title={usuario.email} >{usuario.email}</div>
                                    <div className="px-4 py-2 w-1/3 break-normal">{`${usuario.nombre}`}</div>
                                    <div className="px-4 py-2 w-1/3 truncate">{ asignarNombreRol(usuario.rol)}</div>
                                    
                                </div>
                            ))}

                            {/* Paginación */}
                            <ReactPaginate
                                previousLabel={"Anterior"}
                                nextLabel={"Siguiente"}
                                breakLabel={"..."}
                                pageCount={Math.ceil(usuario.length / usuariosPorPagina)} // Número total de páginas
                                onPageChange={handlePageClick} // Actualiza la página cuando se hace clic
                                containerClassName="flex justify-center items-center space-x-2 mt-4" // Centrado horizontal y espacio entre los elementos
                                pageClassName="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer" // Estilo de los botones de página
                                previousClassName="px-4 py-2 bg-[#2B6CB0] text-white rounded-md hover:bg-blue-700 cursor-pointer" // Estilo del botón de "Anterior"
                                nextClassName="px-4 py-2 bg-[#2B6CB0] text-white rounded-md hover:bg-blue-700 cursor-pointer" // Estilo del botón de "Siguiente"
                                breakClassName="px-4 py-2 text-gray-500" // Estilo de los puntos suspensivos ("...")
                                activeClassName="bg-blue-700 text-white" // Estilo de la página activa
                            />

                        </div>
                    </div>
                </div>
            </div>
            <AgregarUsuarioModal isOpen={isModalOpen} onClose={closeModal}>

            </AgregarUsuarioModal>
        </>
    );
};

export default UsuariosPage;