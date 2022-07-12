import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    token: "",
    user: {
        empresa_id: null,
        id: null,
        perfil: null,
        situacao: null,
    }

}

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            Object.assign(state, {
                isLogged: true, 
                token: action.payload.token,
                user: {
                    empresa_id: action.payload.decode.empresa_id,
                    id: action.payload.decode.id,
                    perfil: action.payload.decode.perfil,
                    siuacao: action.payload.decode.situacao
                }
            })
        },
        logout(state){
            Object.assign(state, initialState)
        }

    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;