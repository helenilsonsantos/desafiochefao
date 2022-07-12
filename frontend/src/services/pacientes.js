import api from "./api";

export async function criarPaciente(dados) {
  

  return await api.post("/paciente", dados);
}
