import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AlertaService } from '../../servicios/AlertaService';
import { X, UserPlus } from 'lucide-react';

const AgregarUsuarioModal = ({ isOpen, onClose }) => {
    console.log("Abriendo el modal2");
    if (!isOpen) return null;

    // Esquema de validación con Yup
    const validationSchema = Yup.object().shape({
        correo: Yup.string()
            .email("Debes ingresar un correo válido")
            .required("El correo es obligatorio"),
        nombre: Yup.string()
            .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras")
            .required("El nombre es obligatorio"),
        password: Yup.string()
            .required("La contraseña es obligatoria")
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .matches(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
            .matches(/[!@#$%^&*]/, "La contraseña debe tener al menos un signo especial"),
        confirmarPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
            .required("Debes confirmar la contraseña"),
        rol: Yup.string()
            .notOneOf([""], "Debes seleccionar un rol")
            .required("El rol es obligatorio"),
    });

    // Configuración de react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    // Función que se ejecuta al enviar el formulario
    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
        alert("Usuario creado exitosamente.");
    };


    return (    
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-100 rounded-lg p-8 w-full max-w-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-start space-x-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-6">Crear nuevo usuario</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Correo</label>
                                <input
                                    type="text"
                                    {...register("correo")}
                                    placeholder="Ingresa el correo"
                                    className="w-full p-2 border rounded-md"
                                />
                                
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Nombre</label>
                                <input
                                    type="text"
                                    {...register("nombre")}
                                    placeholder="Ingresa el nombre"
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Contraseña</label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    placeholder="Ingresa la contraseña"
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Confirmar contraseña</label>
                                <input
                                    type="password"
                                    {...register("confirmarPassword")}
                                    placeholder="Confirma la contraseña"
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Rol</label>
                                <select {...register("rol")} className="w-full p-2 border rounded-md">
                                    <option value="">Selecciona una opción</option>
                                    <option value="1">Superadministrador</option>
                                    <option value="2">Administrador</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            >
                                Crear usuario
                            </button>
                        </form>
                    </div>

                    <div className="pt-16">
                        <UserPlus className="w-32 h-32 text-gray-800" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgregarUsuarioModal;