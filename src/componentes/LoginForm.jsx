import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { data } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const LoginForm = ({ onLogin }) => {

    const validationSchema = Yup.object({
        username: Yup.string().required('El usuario es requerido'), 
        password: Yup.string().required('La contraseña es requerida'),
    })

    

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        onLogin(data)
    }

    React.useEffect(() => {
        // Revisa si hay errores y muestra los toasts
        if (errors.username) {
            toast.error(errors.username.message);  // Muestra error de username
        }
        if (errors.password) {
            toast.error(errors.password.message);  // Muestra error de password
        }
    }, [errors]); 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    {...register('username')}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    {...register('password')}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;