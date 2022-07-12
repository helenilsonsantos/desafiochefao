// import { Api } from "./api";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//     data: Yup.date().required("Data está invalida")
// });

// export async function criarAtendimento(dados) {
//     const payload = {
//         paciente_id: 1,
//         dentista_id: 1,
//         descricao: dados.descricao,
//         data: dados.data,
//         horario: dados.horario,
//         anotacoes: dados.anotacoes
//     };
  
//     return await Api.post("/atendimento", payload);
// }

// export async function buscarAtendimento(id) {
//     return await Api.get("/atendimento/" + id);
// }

// export async function atualizarAtendimento(dados, id) {
//     const payload = {
//         paciente_id: 1,
//         dentista_id: 1,
//         descricao: dados.descricao,
//         data: dados.data,
//         horario: dados.horario,
//         anotacoes: dados.anotacoes
//     };
//     // Verificar isso da Data do atendimento obrigatorio
//     return await Api.patch("/atendimento/" + id, payload);

// }

// export async function deletarAtendimeto(id) {
//     return await Api.patch("/atendimento/desativar/" + id);
// }