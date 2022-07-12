import user from "../Store/modules/user"
import api from "./api"



export const login = async (usuario) => {
    const response = await api.post("/login", usuario)
    return response.data
    
}

