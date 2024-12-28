import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";

const UsuariosPage = () => {
    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar />
                <div className='w-full'>
                    <Navbar titulo={'Usuarios'} />
                    <div className="ml-60 mt-32 bg-white h-screen p-8">
                        <div className="overflow-x-auto w-11/12 mx-auto">
                            <button className="bg-[#2B6CB0] p-2 text-white rounded-lg mb-10 hover:bg-[#125fb0]">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                                            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                                            <circle cx="10" cy="7" r="4" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-4 py-2 w-1/3">
                                    <button className="px-2 hover:bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsuariosPage;