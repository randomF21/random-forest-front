import SideBar from '../componentes/navegacion/sidebar';
import Navbar from '../componentes/navegacion/navbar';


const DashboardPage = () => {

    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombre+apellido} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Bienvenid@'} />
                    <div className="ml-60 mt-40 bg-white h-screen p-8">
                        <div className="flex flex-wrap gap-4 w-full mt-6">

                            <div className="bg-white rounded-lg w-[32%] mb-6 shadow-md h-full">
                                <div className="p-6 w-[100%] h-[70%] border-b rounded-t-lg">
                                    <div className="relative">
                                        <div className="flex flex-col text-lg">
                                            <p className="text-xl font-bold text-center">Matriz de confusión</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg w-[32%] mb-6 shadow-md h-full">
                                <div className="p-6 w-[100%] h-[70%] border-b rounded-t-lg">
                                    <div className="relative">
                                        <div className="flex flex-col text-lg">
                                            <p className="text-xl font-bold text-center">Curva ROC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg w-[32%] mb-6 shadow-md h-full">
                                <div className="p-6 w-[100%] h-[70%] border-b rounded-t-lg">
                                    <div className="relative">
                                        <div className="flex flex-col text-lg">
                                            <p className="text-xl font-bold text-center">Tipo de persona</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 w-full mt-6">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[49%] max-w-full mb-6">
                                <h3 className="text-2xl font-bold mb-4 text-center">Cantidad de entrenamientos</h3>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md w-[49%] mb-6 h-full">
                                <h3 className="text-2xl font-bold mb-4 text-center">Últimos entrenamientos</h3>
                                <div className="overflow-x-auto text-center">
                                    <div className="flex mb-2">
                                        <div className="px-4 py-2 text-lg font-semibold w-1/3">Fecha</div>
                                        <div className="px-4 py-2 text-lg font-semibold w-1/3">Base de datos</div>
                                        <div className="px-4 py-2 text-lg font-semibold w-1/3">Descargar</div>
                                    </div>
                                    
                                    <div className="flex mb-4 border rounded-lg w-11/12 mx-auto items-center">
                                        <div className="px-4 py-2 text-lg w-1/3">27/12/2024</div>
                                        <div className="px-4 py-2 w-1/3">Encuestas</div>
                                        <div className="px-4 py-2 w-1/3">
                                            <button className="px-2 hover:bg-gray-100 ml-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-square-arrow-down">
                                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                                    <path d="M12 8v8" />
                                                    <path d="m8 12 4 4 4-4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;