import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";

const FormularioPage = () => {

    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Bienvenid@'} />
                    <div className="ml-60 mt-32 bg-white h-screen p-8">
                        <form className=" p-8 max-w-2xl w-full ml-48">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="categoria" className="block text-base font-medium mb-2">
                                        Categoría
                                    </label>
                                    <select id="categoria"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]">
                                        <option value="">Selecciona una opción</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="edad" className="block text-base font-medium mb-2">
                                        Edad
                                    </label>
                                    <input type="text" id="edad" placeholder="Ingresa la edad"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="sexo-biologico" className="block text-base font-medium mb-2">
                                        Sexo biológico
                                    </label>
                                    <select id="sexo-biologico"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]">
                                        <option value="">Selecciona una opción</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="escolaridad" className="block text-base font-medium mb-2">
                                        Escolaridad
                                    </label>
                                    <input type="text" id="escolaridad" placeholder="Ingresa la escolaridad"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"/>
                                </div>
                                <div>
                                    <label htmlFor="ocupacion" className="block text-base font-medium mb-2">
                                        Ocupación
                                    </label>
                                    <input type="text" id="ocupacion" placeholder="Ingresa la ocupación"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"/>
                                </div>
                                <div>
                                    <label htmlFor="estrato" className="block text-base font-medium mb-2">
                                        Estrato Socioeconómico
                                    </label>
                                    <input type="text" id="estrato" placeholder="Ingresa el estrato"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"/>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button type="submit"
                                    className="w-7/12 px-4 py-2 bg-[#2B6CB0] text-white font-semibold rounded-md shadow-md hover:bg-[#125fb0]">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FormularioPage;