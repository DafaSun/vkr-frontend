import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth"; // URL бэкенда

axios.defaults.withCredentials = true;

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, { username, password });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.error || "Неверный логин или пароль";
    }
};

export const logout = async () => {
    await axios.get(`${API_URL}/logout/`);
};
