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
            const response = await login(credentials);
            //console.log('Login successful:', response);
            // Manejar el éxito del login, como redirigir al usuario.
            AlertaService.success( response.mensaje + ' C:');
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } catch (error) {
            //console.error('Login failed:', error);
            // Manejar el error, como mostrar un mensaje al usuario.
            AlertaService.error(error.response.data.error + ' :c');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;