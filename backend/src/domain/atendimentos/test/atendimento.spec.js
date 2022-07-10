const supertest = require('supertest')
const app = require ('../../../app')
const authController = require('../../usuarios/controllers/authController')
const { faker } = require ('@faker-js/faker')

describe('No controller, ao executar função', () => {

    describe('cadastrar um atendimento', () => {

        test('em caso dados incompletos dos campos obrigatórios, deve retornar 400', async () => {
            const token = await authController.genereteToken(1, "helenilson", "administrador", "ativo", 1)

            const response = await supertest(app)
            .post("/atendimento")
            .auth(token, { type: 'bearer' })
            .send({
                paciente_id: 1,
                descricao: "blá blá blá",
                data: "2022-06-01",
                horario: "09:00",
                anotacoes: "realizando testes"
            })
    
            expect(response.status).toBe(400)
        })

        test('em caso de usuário não logado, deve retornar 401', async () => {
            const response = await supertest(app)
            .post('/atendimento')
            .send({
                paciente_id: 1,
                dentista_id: 1,
                descricao: "blá blá blá",
                data: "2022-06-01",
                horario: "09:00",
                anotacoes: "realizando testes"
            })
    
            expect(response.status).toBe(401)
        })

    })
})