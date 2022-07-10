import axios from 'axios';



export async function criarUsuario(dados){

    const payload={
        empresa_id: 11,
        nome_completo: dados.nome,
        telefone: dados.telefone,
        email: dados.email,
        perfil:dados.perfil,
        senha: dados.senha  
    }

    return await axios.post("http://localhost:4350/usuario", payload, {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInBlcmZpbCI6ImFkbWluaXN0cmFkb3IiLCJzaXR1YWNhbyI6ImF0aXZvIiwiZW1wcmVzYV9pZCI6MTEsImlhdCI6MTY1NzM5NzM4N30.MmJbBJ-HsM-ErejtrGZgCw_yOFwN470VMKXZJQyhSio"
    }})
}

export async function deletarUsuario(id){
    return await axios.patch("http://localhost:4350/usuario/desativar/"+id, {}, {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInBlcmZpbCI6ImFkbWluaXN0cmFkb3IiLCJzaXR1YWNhbyI6ImF0aXZvIiwiZW1wcmVzYV9pZCI6MTEsImlhdCI6MTY1NzM5NzM4N30.MmJbBJ-HsM-ErejtrGZgCw_yOFwN470VMKXZJQyhSio"}})
}

export async function listarUsuarios(){


    return await axios.get("http://localhost:4350/usuarios/empresa/11", {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInBlcmZpbCI6ImFkbWluaXN0cmFkb3IiLCJzaXR1YWNhbyI6ImF0aXZvIiwiZW1wcmVzYV9pZCI6MTEsImlhdCI6MTY1NzM5NzM4N30.MmJbBJ-HsM-ErejtrGZgCw_yOFwN470VMKXZJQyhSio"}})
}

export async function buscarUsuario(id){
    return await axios.get("http://localhost:4350/usuario/"+id, {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInBlcmZpbCI6ImFkbWluaXN0cmFkb3IiLCJzaXR1YWNhbyI6ImF0aXZvIiwiZW1wcmVzYV9pZCI6MTEsImlhdCI6MTY1NzM5NzM4N30.MmJbBJ-HsM-ErejtrGZgCw_yOFwN470VMKXZJQyhSio"}})
}

export async function atualizarUsuario(dados, id){

    const payload={
        nome_completo: dados.nome,
        telefone: dados.telefone,
        email: dados.email,
        perfil:dados.perfil,
        senha: dados.senha  
    }

    return await axios.patch("http://localhost:4350/paciente/"+id, payload, {headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInBlcmZpbCI6ImFkbWluaXN0cmFkb3IiLCJzaXR1YWNhbyI6ImF0aXZvIiwiZW1wcmVzYV9pZCI6MTEsImlhdCI6MTY1NzM5NzM4N30.MmJbBJ-HsM-ErejtrGZgCw_yOFwN470VMKXZJQyhSio"}})
}