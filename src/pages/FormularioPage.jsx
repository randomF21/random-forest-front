import React, { useState } from "react";
import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";
import ModeloService from "../servicios/modeloService";

const FormularioPage = () => {

    const user = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que guardas un objeto con los datos del usuario 
    const { rol, nombre, apellido } = user;
    const nombreCompleto = `${nombre} ${apellido}`; // Se utiliza para dar el espacio entre el nombre y el apellido

    const [formData, setFormData] = useState({
        edad: "",
        sexo_biologico: "",
        escolaridad: "",
        estrato_socioeconomico: "",
    });
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ModeloService.realizarPrediccion(formData);
            setResultado(response.data);
            setError("");
        } catch (err) {
            setError("Hubo un problema al realizar la predicción.");
        }
    };

    return (
        <>
            <div className="flex m-0 p-0">
                <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} />
                <div className='w-full'>
                    <Navbar titulo={'Bienvenid@'} />
                    <div className="ml-60 mt-32 bg-white h-screen p-8">
                        <form onSubmit={handleSubmit} className=" p-8 max-w-2xl w-full ml-48">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="edad" className="block text-base font-medium mb-2" >
                                        Edad
                                    </label>
                                    <input type="text" id="edad" placeholder="Ingresa la edad" name="edad" value={formData.edad}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="sexo-biologico" className="block text-base font-medium mb-2">
                                        Sexo biológico
                                    </label>
                                    <select id="sexo-biologico" name="sexo_biologico" value={formData.sexo_biologico}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required>
                                        <option value="">Selecciona una opción</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="escolaridad" className="block text-base font-medium mb-2">
                                        Escolaridad
                                    </label>
                                    <input type="text" id="escolaridad" name="escolaridad" value={formData.escolaridad}
                                        onChange={handleChange} placeholder="Ingresa la escolaridad"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required />
                                </div>
                                <div>
                                    <label htmlFor="estrato" className="block text-base font-medium mb-2">
                                        Estrato Socioeconómico
                                    </label>
                                    <input type="text" id="estrato" placeholder="Ingresa el estrato" name="estrato_socioeconomico" value={formData.estrato_socioeconomico}
                                        onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <button type="submit"
                                    className="w-7/12 px-4 py-2 bg-[#2B6CB0] text-white font-semibold rounded-md shadow-md hover:bg-[#125fb0]">
                                    Realizar Predicción
                                </button>
                            </div>
                        </form>
                        {resultado && (
                            <div className="mt-6 p-4 border rounded bg-green-100">
                                <h2 className="text-lg font-bold">Resultado de la Predicción</h2>
                                <p><strong>Predicción:</strong> {resultado.prediccion}</p>
                                <p><strong>Probabilidad:</strong> {resultado.probabilidad.toFixed(2)}</p>
                            </div>
                        )}

                        {error && (
                            <div className="mt-6 p-4 border rounded bg-red-100 text-red-800">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default FormularioPage;