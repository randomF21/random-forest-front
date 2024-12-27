import React from 'react';
import LoginForm from '../componentes/LoginForm';
import { login } from '../servicios/LoginService';
import { useNavigate } from 'react-router-dom';
import { AlertaService } from '../servicios/AlertaService';

const LoginPage = () => {
    // generamos variables para la navegacion
    const navigate = useNavigate();
    const handleLogin = async (credentials) => {
        try {
            // realizamos el envio de datos y esperamos a que finalice
            const reg = await login(credentials);
            //console.log('Login successful:', response);
            console.log(reg)
            if (reg === true) {
                // Manejar el éxito del login, como redirigir al usuario.
                AlertaService.success('Ingresando C:');
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

        // try {
        //     const reg = await Registro(credentials);
            
        //     if (reg === true) {
        //         // Si el registro es exitoso, muestra un mensaje y redirige
        //         AlertaService.success('Usuario creado C:');
        //         setTimeout(() => {
        //             navigate('/dashboard');
        //         }, 1000);
        //     }
        // } catch (error) {
        //     // Maneja el error de manera correcta
        //     console.error('Error en el registro:', error);

        //     // Verifica si el error tiene respuesta (response) y muestra el mensaje de error
        //     if (error.response && error.response.data) {
        //         AlertaService.error(error.response.data.error || 'Error desconocido');
        //     } else {
        //         AlertaService.error('Error al procesar la solicitud');
        //     }
        // }
    };

    return (
        <div>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;