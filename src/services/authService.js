import api from "../config/api"

export const AuthService = {
    login: async (email, password) => {
       const response = await api.post("/api/auth", {email, password}) 
       return response.data
    }
}
