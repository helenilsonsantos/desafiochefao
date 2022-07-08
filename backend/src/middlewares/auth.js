const { expressjwt } = require ('express-jwt')
const secret = require('../configs/secret')

module.exports = expressjwt ({
    secret: secret.key,
    algorithms: ['HS256']
})