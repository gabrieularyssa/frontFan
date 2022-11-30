import api from "../config/api"

export const UsersService = {
    create: async (data) => {
       const response = await api.post("/api/auth/register", data) 
       return response.data
    }, 
    findAll: async () => {
        const response = await api.get("/api/users") 
        return response?.data
    },
    update: async (id, data) => {
        const response = await api.patch(`/api/users/${id}`, data) 
        return response?.data
    }
}
