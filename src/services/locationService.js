import api from "../config/api"

export const LocationsService = {
    getStates: async () => {
        const response = await api.get("/api/locations") 
        return response?.data
    }
}
