import toast from "react-hot-toast";


// Variable con las alertas para el sistema 
const AlertaService = {
    // definimos el mensaje y la poscion si existe
    success: (mensage, position) => {
        toast.success(mensage, {position});
    },
    // alerta de error
    error: (mensaje, position) => {
        toast.error(mensaje, {position});
    },
    custom:(mensaje, posicion) => {
        toast(mensaje, {
            icon:'❕',
            position: posicion,
        });
    },
    loading:(mensaje, posicion) => {
        const toastId = toast.loading(mensaje, {
            position: posicion
        });
        setTimeout(() => {
            toast.dismiss(toastId);
        }, 1000);
    }
}

export { AlertaService };