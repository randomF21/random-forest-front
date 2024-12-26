import logo from '../assets/imagenes/logo.webp';
import registro from '../assets/imagenes/registro.webp';

const RegistroForm = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-2">
            {/* Sección izquierda */}
            <div className="flex-1 flex flex-col justify-center items-center bg-white px-4 sm:px-8 py-6">
                <img src={logo} alt="Logo" className="w-64 mb-4" />
                <h2 className="text-5xl font-semibold text-[#333333]">Crea tu cuenta</h2>
                <form className="w-full max-w-xl p-6">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 mb-7'>
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-base font-medium mb-2">
                                Nombre(s):
                            </label>
                            <input type="text" id="nombre" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="apellido" className="block text-base font-medium mb-2">
                                Apellidos:
                            </label>
                            <input type="text" id="apellido" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>

                        <div className="mb-4">
                            <label for="" class="block text-base font-medium mb-2">Tipo de identificación</label>
                            <select name="tipodocumento"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]">
                                <option selected hidden>Seleccione uno</option>
                                <option value="Registro Civil">Registro Civil</option>
                                <option value="T.I">T.I</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="numero" className="block text-base font-medium mb-2">
                                Número de identificación:
                            </label>
                            <input type="text" id="numero" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="numero" className="block text-base font-medium mb-2">
                                Número de contacto:
                            </label>
                            <input type="text" id="numero" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="fecha" className="block text-base font-medium mb-2">
                                Fecha de nacimiento:
                            </label>
                            <input type="date" id="fecha" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-base font-medium mb-2">
                                Correo electrónico:
                            </label>
                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-base font-medium mb-2">
                                Contraseña:
                            </label>
                            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="w-7/12 bg-[#2B6CB0] text-white py-2 px-4 rounded-md hover:bg-[#125fb0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Guardar
                        </button>
                    </div>
                    <p className="mt-6 text-center text-sm text-[#04103B]">
                        ¿Tienes una cuenta?{" "}
                        <a href="/login" className="text-[#2B6CB0] hover:underline">
                            Ingresa
                        </a>
                    </p>
                </form>
            </div>

            {/* Sección derecha */}
            <div className="flex-1 bg-[#1B4C80] text-white flex flex-col justify-center items-center px-8 rounded-r-3xl">
                <img src={registro} alt="registro" />
                <h1 className="text-5xl font-bold mb-4">Empieza a conocerte</h1>
                <p className="text-2xl">Permítete mejorar</p>
            </div>
        </div>
    );
};

export default RegistroForm;