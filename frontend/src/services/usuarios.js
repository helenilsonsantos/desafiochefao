import { Api } from "./api";

export async function criarUsuario(dados) {
  const payload = {
    empresa_id: 11,
    nome_completo: dados.nome,
    telefone: dados.telefone,
    email: dados.email,
    perfil: dados.perfil,
    senha: dados.senha,
  };

  return await Api.post("/usuario", payload);
}

export async function deletarUsuario(id) {
  return await Api.patch("/usuario/desativar/" + id);
}

export async function listarUsuarios() {
  return await Api.get("/usuarios/empresa/11");
}

export async function buscarUsuario(id) {
  return await Api.get("/usuario/" + id);
}

export async function atualizarUsuario(dados, id) {
  const payload = {
    nome_completo: dados.nome,
    telefone: dados.telefone,
    email: dados.email,
    perfil: dados.perfil,
    senha: dados.senha,
  };

  return await Api.patch("/usuario/" + id, payload);
}
