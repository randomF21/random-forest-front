import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AlertaService } from '../servicios/AlertaService';

import logo from '../assets/imagenes/logo.webp';
import login from '../assets/imagenes/login.webp';


const LoginForm = ({ onLogin }) => {
    // validamos las variables  y verificamos el dato
    const validationSchema = Yup.object({
        email: Yup.string().required('El usuario es requerido'),
        password: Yup.string().required('La contraseña es requerida'),
    })

    // 
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        onLogin(data)
    }

    React.useEffect(() => {
        // Revisa si hay errores y muestra los toasts
        if (errors.email) {
            //toast.error(errors.email.message);  
            AlertaService.error(errors.email.message); // Muestra error de email 

        }
        if (errors.password) {
            //toast.error(errors.password.message);  
            AlertaService.error(errors.password.message); // Muestra error de password
        }
    }, [errors]);

    return (
        <div className="flex h-screen p-2">
            {/* Sección izquierda */}
            <div className="flex-1 bg-[#1B4C80] text-white flex flex-col justify-center items-center px-8 rounded-l-3xl">
                <img src={login} alt="login" />
                <h1 className="text-5xl font-bold mb-4">Conecta con tu interior</h1>
                <p className="text-2xl">Date el tiempo para reflexionar</p>
            </div>

            {/* Sección derecha */}
            <div className="flex-1 flex flex-col justify-center items-center bg-white px-8">
                <img src={logo} alt="Logo" className="w-64 mb-4" />
                <h2 className="text-4xl font-semibold text-[#333333]">Ingresa con tu cuenta</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-md p-6"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-base font-medium "
                        >
                            Usuario:
                        </label>
                        <input
                            type="text"
                            id="email"
                            {...register("email")}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-base font-medium"
                        >
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#2B6CB0]"
                        />
                    </div>
                    <div className="flex justify-end mb-4">
                        <a
                            href="/forgot-password"
                            className="text-sm text-[#2B6CB0] hover:underline"
                        >
                            ¿Olvidaste la contraseña?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#2B6CB0] text-white py-2 px-4 rounded-md hover:bg-[#125fb0] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Iniciar sesión
                    </button>
                    
                </form>
            </div>
        </div>
    );
};

export default LoginForm;