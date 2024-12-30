import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";
import AgregarUsuarioModal from "../componentes/modal/AgregarUsuario";
import { TraerUsuario } from "../servicios/UsuarioService";

import React, { useState } from 'react';
import { Trash2, UserPen } from "lucide-react";

const UsuariosPage = () => {
    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const usuariosss = TraerUsuario();
    console.log(usuariosss)

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombre + apellido} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Usuarios'} />
                    <div className="ml-60 mt-32 bg-white h-screen p-8">
                        <div className="overflow-x-auto w-11/12 mx-auto">
                            <button onClick={openModal}
                                className="bg-[#2B6CB0] p-2 text-white rounded-lg mb-10 hover:bg-[#125fb0]">
                                Crear nuevo usuario
                            </button>
                            <div className="flex mb-2 text-center">
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Usuario</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Nombre</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Rol</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Estado</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Editar</div>
                                <div className="px-4 py-2 text-lg font-semibold w-1/3">Eliminar</div>
                            </div>

                            <div className="flex mb-4 bg-[#F2F2F2] rounded-lg mx-auto items-center text-center">
                                <div className="px-4 py-2 text-lg w-1/3">12345678</div>
                                <div className="px-4 py-2 w-1/3">Maria Sierra</div>
                                <div className="px-4 py-2 w-1/3">Administrador</div>
                                <div className="px-4 py-2 w-1/3">Inactivo</div>
                                <div className="px-4 py-2 w-1/3">
                                    <button className="px-2 hover:bg-gray-100">
                                        <UserPen size={24} />
                                    </button>
                                </div>
                                <div className="px-4 py-2 w-1/3">
                                    <button className="px-2 hover:bg-gray-100">
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </div>
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