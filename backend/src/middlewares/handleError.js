const { UnauthorizedError } = require("express-jwt")
const { ValidationError } = require("express-validation")

module.exports = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)
    }

    if (error.name === 'UnauthorizedError') {
        return res.status(error.status).json(error)
    }

    return res.status(error.statusCode).json(error)
}
