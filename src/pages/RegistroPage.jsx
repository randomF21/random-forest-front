import React from 'react';
import RegistroForm from '../componentes/RegistroForm';
import { Registro } from '../servicios/RegistroService';
import { useNavigate } from 'react-router-dom';
import { AlertaService } from '../servicios/AlertaService';
import { AxiosError } from 'axios';

const RegistroPage = () => {
    // generamos variables para la navegacion
    const navigate = useNavigate();
    const handleRegistro = async (credentials) => {
        console.log(credentials);

        try {
            const reg = await Registro(credentials);
            
            if (reg === true) {
                // Si el registro es exitoso, muestra un mensaje y redirige
                AlertaService.success('Usuario creado C:');
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000);
            }
        } catch (error) {
            // Maneja el error de manera correcta
            console.error('Error en el registro:', error);

            // Verifica si el error tiene respuesta (response) y muestra el mensaje de error
            if (error.response && error.response.data) {
                AlertaService.error(error.response.data.error || 'Error desconocido');
            } else {
                AlertaService.error('Error al procesar la solicitud');
            }
        }

        // // realizamos el envio de datos y esperamos a que finalice
        // const reg = await Registro(credentials);
        // // validamos que fue lo que llego
        // if(reg == true){
        //     // Manejar el éxito del login, como redirigir al usuario.
        //     AlertaService.success('Usuario creado C:');
        //     setTimeout(() => {
        //         //navigate('/dashboard');
        //         console.log('al dashboard')
        //     }, 1000);
        // } else {
        //     //console.error('Login failed:', error);
        //     // Manejar el error, como mostrar un mensaje al usuario.
        //     console.log('ta mal')
        //     console.log(AxiosError)
        //     AlertaService.error(error.response.data.error + ' :c');
        // }
    };

    return (
        <div>
            <RegistroForm onRegistro={handleRegistro} />
        </div>
    );
}

export default RegistroPage;