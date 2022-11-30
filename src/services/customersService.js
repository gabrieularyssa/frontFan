import api from "../config/api"

export const CustomersService = {
    create: async (data) => {
       const response = await api.post("/api/customers", data) 
       return response.data
    }, 
    findAll: async () => {
        const response = await api.get("/api/customers") 
        return response?.data
    }
}
