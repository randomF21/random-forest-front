import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AlertaService } from '../servicios/AlertaService';

import logo from '../assets/imagenes/logo.webp';
import registro from '../assets/imagenes/registro.webp';

const RegistroForm = ( {onRegistro} ) => {

    // variable para validar los campos
    const schema = Yup.object({
        nombre: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios")
            .max(70, "Los nombre tienen un limite de 70 letras")
            .required("Debe colocar un nombre"),

        apellido: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, "El apellido solo puede contener letras y espacios")
            .max(70, "Los apellido tienen un limite de 70 letras")
            .required("Debe colocar un apellido"),

        tipo_documento: Yup.string()
            .required("Debe seleccionar una opción"),

        num_documento: Yup.string()
            .matches(/^[0-9]+$/, "El documento solo puede contener números")
            .min(8, "El documento debe tener al menos 8 dígitos")
            .max(10, "El documento no puede tener más de 10 dígitos")
            .required("Debe colocar un documento válido"),

        telefono: Yup.string()
            .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
            .length(10, "El teléfono debe tener exactamente 10 dígitos")
            .required("Debe colocar un teléfono válido"),

        nacimiento: Yup.date()
            .typeError("Debe ingresar una fecha válida")
            .test(
                "validar-fecha",
                "Fecha invalida",
                (value) => {
                    if (!value) return false;

                    const today = new Date();
                    const selectedDate = new Date(value);

                    // Validar que no sea futura o actual
                    return selectedDate <= today;
                }
            )
            .required("Debe colocar una fecha válida"),
            
        email: Yup.string()
            .email("Debe colocar un correo válido")
            .required("Debe colocar un correo válido"),
            
        password: Yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial"
            )
            .required("Debe colocar una contraseña válida"),
    });

    // para verificar si todo es correct
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [isOptionSelected, setIsOptionSelected] = useState(false);

    // variable que envia los datos un elemento manejable
    const onSubmit = (data) => {
        if (data.tipo_documento !== "") {
            // convertimos la fecha a un formato entendible para Django
            const fechaISO = new Date(data.nacimiento).toISOString().split('T')[0];
            // actualizamos el valor en la varaible
            data.nacimiento = fechaISO;
            // enviamos datos
            onRegistro(data);
        }
    };

    const handleSelectChange = (event) => {
        setIsOptionSelected(event.target.value !== ""); // Marcar si ya se ha seleccionado algo
    };

    // varaible para las alertas
    React.useEffect(() => {
        let alertCount = 0; // Contador para las alertas
        // Revisa si hay errores y muestra los toasts
        Object.keys(errors).forEach((key) => {
            if (alertCount < 3) { // Verifica si el contador es menor que 3
                AlertaService.error(errors[key].message); // Muestra el mensaje de error correspondiente
                alertCount++; // Incrementa el contador
            }
});

    }, [errors]);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-2">
            {/* Sección izquierda */}
            <div className="flex-1 flex flex-col justify-center items-center bg-white px-4 sm:px-8 py-6">
                <img src={logo} alt="Logo" className="w-64 mb-4" />
                <h2 className="text-5xl font-semibold text-[#333333]">Crea tu cuenta</h2>

                <form className="w-full max-w-xl p-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 mb-7'>

                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-base font-medium mb-2">
                                Nombre(s):
                            </label>
                            <input type="text" id="nombre" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('nombre')} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="apellido" className="block text-base font-medium mb-2">
                                Apellidos:
                            </label>
                            <input type="text" id="apellido" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('apellido')} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="selectRegistro" className="block text-base font-medium mb-2">Tipo de identificación</label>

                            <select id="selectRegistro" name="tipodocumento" {...register('tipo_documento')} onChange={handleSelectChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]">
                                <option value="" hidden>Seleccione uno</option>
                                <option value="Registro Civil">Registro Civil</option>
                                <option value="T.I">T.I</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="numero" className="block text-base font-medium mb-2">
                                Número de identificación:
                            </label>
                            <input type="text" id="numero" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('num_documento')} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="numero" className="block text-base font-medium mb-2">
                                Número de contacto:
                            </label>
                            <input type="text" id="numero" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('telefono')} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="fecha" className="block text-base font-medium mb-2">
                                Fecha de nacimiento:
                            </label>
                            <input type="date" id="fecha" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('nacimiento')} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-base font-medium mb-2">
                                Correo electrónico:
                            </label>
                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('email')} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-base font-medium mb-2">
                                Contraseña:
                            </label>
                            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]" {...register('password')} />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="w-7/12 bg-[#2B6CB0] text-white py-2 px-4 rounded-md hover:bg-[#125fb0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Guardar
                        </button>
                    </div>
                    <p className="mt-6 text-center text-sm text-[#04103B]">
                        ¿Tienes una cuenta?{" "}defaultv
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