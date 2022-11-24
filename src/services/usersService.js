import api from "../config/api"

export const UsersService = {
    create: async (data) => {
       const response = await api.post("/api/users", data) 
       return response.data
    }, 
    findAll: async () => {
        const response = await api.get("/api/users") 
        return response?.data
    }
}
