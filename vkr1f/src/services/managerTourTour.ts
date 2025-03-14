import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/manager/tour/tour/";

export const fetchTourCategories = async (params: {
    checkin: string;
    checkout: string;
    people: number;
    gender: number;
    tour_type: number;
}) => {
    try {
        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении категорий туров:", error);
        throw error;
    }
};
