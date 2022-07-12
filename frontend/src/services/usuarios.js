import api from "./api";

export async function criarUsuario(dados) {
  

  return await api.post("/cadastro-inicial", dados);
}

export async function deletarUsuario(id) {
  return await api.patch("/usuario/desativar/" + id);
}

export async function listarUsuarios() {
  return await api.get("/usuarios/empresa/11");
}

export async function buscarUsuario(id) {
  return await api.get("/usuario/" + id);
}

export async function atualizarUsuario(dados, id) {
  const payload = {
    nome_completo: dados.nome,
    telefone: dados.telefone,
    email: dados.email,
    perfil: dados.perfil,
    senha: dados.senha,
  };

  return await api.patch("/usuario/" + id, payload);
}
