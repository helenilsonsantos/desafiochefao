import axios from "axios";  

const api = axios.create({baseURL: "http://localhost:4350"})

export const criarUsuario = async (user) => {
    try {
        console.log("cadastrei")
        // return await api.post("/cadastro-inicial", user)
    } catch (error) {
        console.log("errou")
        return error
    }
}