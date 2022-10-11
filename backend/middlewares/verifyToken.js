const jwt = require('jsonwebtoken')
const jwt_decode = require("jwt-decode");
const fs = require("fs");

const secretKey = fs.readFileSync('./config/secret.key', 'utf8');

const verifyToken = (req, res, next) => {
    const token =
        req.headers['authorization']

    if (!token) {
        return res
            .status(401)
            .json({
                error: { message: 'A token is required for authentication' },
            })
    }
    try {
        const data = jwt.verify( token, secretKey );
        res.user = data.user;
    } catch (err) {
        return res
            .status(401)
            .json({ error: { message: 'Invalid Token' } })
    }
    return next()
}

module.exports = verifyToken