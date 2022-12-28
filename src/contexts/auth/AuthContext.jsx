import { createContext, useEffect, useState } from "react";
import { AuthService } from "../../services/authService";

export const AuthContext = createContext(null)
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const isAuthenticated = Boolean(localStorage.getItem("@auth/token"))
    useEffect(() => {

        if(!isAuthenticated) return 
        const getMe = async () =>{ 
            const res = await AuthService.getMe()
            // console.log(res)
            setUser(res)
        }
        getMe().catch(console.error)
    }, [isAuthenticated])
    const login = async (email, password) => {
        const data = await AuthService.login(email, password)
        localStorage.setItem("@auth/token", data?.token)
        return true
    }
    return (
        <AuthContext.Provider value={{login, user}}>
            {children}
        </AuthContext.Provider>
    )
}
