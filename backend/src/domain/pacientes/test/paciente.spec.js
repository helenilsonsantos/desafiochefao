const supertest = require('supertest')
const app = require ('../../../app')
const authController = require('../../usuarios/controllers/authController')
const { faker } = require ('@faker-js/faker')

describe('No controller, ao executar função', () => {

    describe('cadastrar um atendimento', () => {

        test('em caso dados incompletos dos campos obrigatórios, deve retornar 400', async () => {
            const token = await authController.genereteToken(1, "helenilson", "administrador", "ativo", 1)

            const response = await supertest(app)
            .post("/paciente")
            .auth(token, { type: 'bearer' })
            .send({
                nome: "helenilson holamek",
                data_nascimento: "2022-05-10",
                email: "helenilson@gmail.com",
                telefone: "981593611",
                observacoes: "",
                empresa_id: 1,
                rua: "rua das graças",
                numero: "05",
                bairro: "centro",
                cep: "57500-000",
                complemento: "",
                cidade: "Santana do Ipanema",
                estado: "alagoas"
            })
    
            expect(response.status).toBe(400)
        })

        test('em caso de usuário não logado, deve retornar 401', async () => {
            const response = await supertest(app)
            .post('/paciente')
            .send({
                nome: "helenilson holamek",
                cpf: "123.345.345 - 00",
                data_nascimento: "2022-05-10",
                email: "helenilson@gmail.com",
                telefone: "981593611",
                observacoes: "",
                empresa_id: 1,
                rua: "rua das graças",
                numero: "05",
                bairro: "centro",
                cep: "57500-000",
                complemento: "",
                cidade: "Santana do Ipanema",
                estado: "alagoas"
            })
    
            expect(response.status).toBe(401)
        })

    })
})