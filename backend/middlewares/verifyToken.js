const fs = require('fs')
const jwt = require('jsonwebtoken')
const jwt_decode = require("jwt-decode");
const {
    HTTP_UNAUTHORIZED,
    HTTP_FORBIDDEN,
} = require('../helpers/statusCodes')

const verifyToken = (req, res, next) => {
    const token =
        req.body.token  req.query.token  req.headers['authorization']

    if (!token) {
        return res
            .status(HTTP_FORBIDDEN)
            .json({
                error: { message: 'A token is required for authentication' },
            })
    }
    try {
        const decoded = jwt_decode(token)
        req.user = decoded.user
    } catch (err) {
        return res
            .status(HTTP_UNAUTHORIZED)
            .json({ error: { message: 'Invalid Token' } })
    }
    return next()
}

module.exports = verifyToken