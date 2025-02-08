import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_CRYPTO_API;

export const fetchCryptoData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 10,
                page: 1,
                sparkline: true
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching crypto data:", error);
        return [];
    }
};
