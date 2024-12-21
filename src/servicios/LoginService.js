import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login/`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export { login };