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
    };

    return (
        <div>
            <RegistroForm onRegistro={handleRegistro} />
        </div>
    );
}

export default RegistroPage;