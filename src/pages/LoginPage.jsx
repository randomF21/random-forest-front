import React from 'react';
import LoginForm from '../componentes/LoginForm';
import { login } from '../servicios/LoginService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'


const LoginPage = () => {
    const navigate = useNavigate();
    const handleLogin = async (credentials) => {
        try {
            const response = await login(credentials);
            console.log('Login successful:', response);
            // Manejar el éxito del login, como redirigir al usuario.
            toast.success('Credenciales correctas')
            setTimeout(() => {
                //navigate('/dashboard') 
            }, 1000);
        } catch (error) {
            console.error('Login failed:', error);
            // Manejar el error, como mostrar un mensaje al usuario.
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