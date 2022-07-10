const supertest  = require ("supertest");
const { faker } = require ('@faker-js/faker')
const app = require ('../../../app')

describe('No controller, ao executar função', () => {

    describe('cadastrar um usuário adiministrador', () => {

        test('em caso dados incompletos, deve retornar 400', async () => {
            const response = await supertest(app)
            .post('/cadastro-inicial')
            .send({
                nome_empresa: "Gama Academy",
                nome_completo: "Helenilson Holamek",
                telefone: "82981681784",
                email: "helenilsonn@gmail.com",
                senha: "12345678",
                avatar: ""
            })
    
            expect(response.status).toBe(400)
        })

    })

    describe('login do usuário', () => {

        test('em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
            .post('/login')
            .send({
                email: "helenilson@gmail.com",
                senha: "12345678"
            })
    
            expect(response.status).toBe(200)
        })

    })

    describe('Dados inválidos ou incompletos', () => {

        test('quando os dados foram inválidos ou incompletos, deve retornar 400', async () => {
            const response = await supertest(app)
            .post('/login')
            .send({
                email: "hel@gmail.com",
                senha: "12345678"
            })
    
            expect(response.status).toBe(400)
        })

    })
})