import api from "./api.js"

export async function cadastrarPaciente(dados) {

    return await api.post("/paciente", dados);
  }
  