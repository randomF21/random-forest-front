import React, { useState } from "react";
import Navbar from "../componentes/navegacion/navbar";
import SideBar from "../componentes/navegacion/sidebar";
import ModeloService from "../servicios/modeloService";

const FormularioPage = () => {
    const estratoMap = {
        'Bajo': [0, 1, 2],  // Bajo puede ser 0, 1 o 2
        'Medio': [3, 4, 5], // Medio puede ser 3, 4 o 5
        'Alto': [6, 7, 8]   // Alto puede ser 6 o más
    };

    const [formData, setFormData] = useState({
        edad: "",
        sexo_biologico: "",
        escolaridad: "",
        estrato_socioeconomico: "",
        estrato_numerico: "",
        estado_civil: "",
        area_urbana_rural: "",
        comorbilidades: [],
    });
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState("");

    const traducirPrediccion = (prediccion) => {
        switch (prediccion) {
            case 1:
                return "Posible caso de suicidio";
            case 0:
                return "No es un caso de suicidio";
            default:
                return "Predicción no disponible";
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;

        // Copia el array actual de comorbilidades
        const updatedComorbilidades = [...formData.comorbilidades];

        if (checked) {
            // Si el checkbox está seleccionado, agrega el valor al array
            updatedComorbilidades.push(value);
        } else {
            // Si el checkbox se deselecciona, elimina el valor del array
            const index = updatedComorbilidades.indexOf(value);
            if (index !== -1) {
                updatedComorbilidades.splice(index, 1);
            }
        }

        // Actualiza el estado
        setFormData({
            ...formData,
            [name]: updatedComorbilidades,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Si el campo es 'estrato_socioeconomico', mapea el valor a un número
        if (name === 'estrato_socioeconomico') {
            const estratoNumerico = estratoMap[value][0];  // Tomar el primer valor del rango
            setFormData({
                ...formData,
                [name]: value,  // Guardar el valor original ('Bajo', 'Medio', 'Alto')
                estrato_numerico: estratoNumerico  // Guardar el valor numérico
            });
        } else {
            // Para otros campos, actualiza el estado normalmente
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Verifica que estrato_numerico tenga un valor válido
        if (formData.estrato_numerico === undefined || formData.estrato_numerico === null) {
            setError("El estrato socioeconómico no está definido.");
            return;
        }
    
        // Convertir los datos al formato que el backend espera
        const datosParaEnviar = {
            Edad: parseInt(formData.edad, 10),  // Convertir a número
            Sexo: formData.sexo_biologico === "Masculino" ? 1 : 0,  // 1 para Masculino, 0 para Femenino
            Soltero: formData.estado_civil === "Soltero" ? 1 : 0,
            Casado: formData.estado_civil === "Casado" ? 1 : 0,
            UnionLibre: formData.estado_civil === "UnionLibre" ? 1 : 0,
            Viudo: formData.estado_civil === "Viudo" ? 1 : 0,
            TEPT: formData.comorbilidades.includes("Trastorno de estrés postraumático") ? 1 : 0,
            Esquizofrenia: formData.comorbilidades.includes("Esquizofrenia") ? 1 : 0,
            Depresion: formData.comorbilidades.includes("Depresión") ? 1 : 0,
            AreaUrbana: formData.area_urbana_rural === "Urbana" ? 1 : 0,
            EstratoSocioeconomico: formData.estrato_numerico,  // Usar el valor numérico
        };
    
        console.log("Datos a enviar:", datosParaEnviar);
    
        try {
            const response = await ModeloService.realizarPrediccionUsuarios(datosParaEnviar);
            console.log("Respuesta del backend:", response.data);
            setResultado(response.data);
            setError("");
        } catch (err) {
            console.error("Error al enviar los datos:", err);
            setError("Hubo un problema al realizar la predicción.");
        }
    };

    return (
        <>
            <div className="flex m-0 p-0">
                {/* <SideBar ruta_foto="https://picsum.photos/200" nombreUsuario={nombreCompleto} rol={rol} /> */}
                <div className='w-full'>
                    <Navbar titulo={'Bienvenid@'} />
                    <div className=" mt-32 bg-white h-screen p-8">
                        <div className="flex space-x-8">
                            {/* Columna del formulario */}
                            <form onSubmit={handleSubmit} className="w-1/2 p-8 border border-gray-200 rounded-lg shadow-md">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Campo: Edad */}
                                    <div>
                                        <label htmlFor="edad" className="block text-base font-medium mb-2">
                                            Edad
                                        </label>
                                        <input type="number" id="edad" placeholder="Ingresa la edad" name="edad" value={formData.edad}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required />
                                    </div>

                                    {/* Campo: Sexo biológico */}
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

                                    {/* Campo: Escolaridad */}
                                    <div>
                                        <label htmlFor="escolaridad" className="block text-base font-medium mb-2">
                                            Escolaridad
                                        </label>
                                        <input type="text" id="escolaridad" name="escolaridad" value={formData.escolaridad}
                                            onChange={handleChange} placeholder="Ingresa la escolaridad"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required />
                                    </div>

                                    {/* Campo: Estrato Social */}
                                    <div>
                                        <label htmlFor="estrato_socioeconomico" className="block text-base font-medium mb-2">
                                            Estrato Social
                                        </label>
                                        <select
                                            id="estrato_socioeconomico"
                                            name="estrato_socioeconomico"
                                            value={formData.estrato_socioeconomico}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"
                                            required
                                        >
                                            <option value="">Selecciona una opción</option>
                                            <option value="Bajo">Bajo</option>
                                            <option value="Medio">Medio</option>
                                            <option value="Alto">Alto</option>
                                        </select>
                                    </div>

                                    {/* Campo: Estado Civil */}
                                    <div>
                                        <label htmlFor="estado-civil" className="block text-base font-medium mb-2">
                                            Estado Civil
                                        </label>
                                        <select id="estado-civil" name="estado_civil" value={formData.estado_civil}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required>
                                            <option value="">Selecciona una opción</option>
                                            <option value="Soltero">Soltero</option>
                                            <option value="Casado">Casado</option>
                                            <option value="UnionLibre">Unión Libre</option>
                                            <option value="Viudo">Viudo</option>
                                        </select>
                                    </div>

                                    {/* Campo: Área Urbana/Rural */}
                                    <div>
                                        <label htmlFor="area-urbana-rural" className="block text-base font-medium mb-2">
                                            Área Urbana / Rural
                                        </label>
                                        <select id="area-urbana-rural" name="area_urbana_rural" value={formData.area_urbana_rural}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" required>
                                            <option value="">Selecciona una opción</option>
                                            <option value="Urbana">Urbana</option>
                                            <option value="Rural">Rural</option>
                                        </select>
                                    </div>

                                    {/* Campo: Comorbilidades */}
                                    <div>
                                        <label className="block text-base font-medium mb-2">
                                            Comorbilidades (Otras Enfermedades Asociadas)
                                        </label>
                                        <div className="space-y-2">
                                            {[
                                                "Ninguna",
                                                "Trastorno de estrés postraumático",
                                                "Esquizofrenia",
                                                "Depresión",
                                                "Otra enfermedad",
                                            ].map((comorbilidad) => (
                                                <div key={comorbilidad} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={comorbilidad}
                                                        name="comorbilidades"
                                                        value={comorbilidad}
                                                        checked={formData.comorbilidades.includes(comorbilidad)}
                                                        onChange={handleCheckboxChange}
                                                        className="h-4 w-4 text-[#2B6CB0] focus:ring-[#2B6CB0] border-gray-300 rounded"
                                                    />
                                                    <label htmlFor={comorbilidad} className="ml-2 block text-sm text-gray-900">
                                                        {comorbilidad}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <button type="submit"
                                        className="w-7/12 px-4 py-2 bg-[#2B6CB0] text-white font-semibold rounded-md shadow-md hover:bg-[#125fb0]">
                                        Realizar Predicción
                                    </button>
                                </div>
                            </form>

                            {/* Columna de la card con el resultado */}
                            <div className="w-1/2 p-8 border border-gray-200 rounded-lg shadow-md">
                                {resultado ? (
                                    <>
                                        <h2 className="text-2xl font-bold mb-4">Resultado de la Predicción</h2>
                                        <div className="bg-green-100 p-6 rounded-lg">
                                            <p className="text-lg font-semibold">
                                                <strong>Predicción:</strong> {traducirPrediccion(resultado.prediction)}
                                            </p>
                                            {resultado.probabilities && Array.isArray(resultado.probabilities) && resultado.probabilities[0] ? (
                                                <p className="text-lg font-semibold">
                                                    <strong>Probabilidad:</strong> {resultado.probabilities[0][0].toFixed(2)}
                                                </p>
                                            ) : (
                                                <p className="text-lg font-semibold">
                                                    <strong>Probabilidad:</strong> No disponible
                                                </p>
                                            )}
                                        </div>
                                        <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold mb-2">¿Cómo interpretar el resultado?</h3>
                                            <p className="text-gray-700">
                                                La predicción indica si existe un posible caso de suicidio basado en los datos proporcionados. 
                                                Un valor de <strong>"Posible caso de suicidio"</strong> sugiere que se deben tomar medidas preventivas, 
                                                mientras que <strong>"No es un caso de suicidio"</strong> indica un riesgo bajo.
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-gray-600 text-center">Realiza una predicción para ver el resultado aquí.</p>
                                )}

                                {error && (
                                    <div className="mt-6 p-4 border rounded bg-red-100 text-red-800">
                                        {error}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FormularioPage;