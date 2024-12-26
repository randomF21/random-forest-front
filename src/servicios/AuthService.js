// Método para verificar si el usuario está autenticado
export function isAuthenticated() {
    return !!sessionStorage.getItem('token');
}

// Método para obtener el rol del usuario actual
export function getRole() {
    const currentUser = JSON.parse(sessionStorage.getItem('usuario')); // Suponiendo que el objeto usuario se guarda en sessionStorage
    return currentUser ? currentUser.rol.nombre_rol : null;
}

// Método para obtener el token del usuario
export function getToken() {
    return sessionStorage.getItem('token');
}

// Método para obtener el objeto de usuario actual
export function getUser() {
    const identityJSON = sessionStorage.getItem('usuario');
    const currentUser = identityJSON ? JSON.parse(identityJSON) : null;
    return currentUser;
}
