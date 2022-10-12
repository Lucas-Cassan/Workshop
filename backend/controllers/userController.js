const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode')
const {ObjectID} = require("mongodb");

module.exports.all = (req, res, next) => {

    User.find({}).then(function (users) {
        res.status(200).json({
            users: users
        });
    })
        .catch(() => res.status(400).send({error: "Erreur de récupération"}));
};

module.exports.get = (req, res, next) => {
    const {_id} = req.body;

    User.findById(_id).then(function (user) {
        res.status(200).json({
            user: user
        });
    })
        .catch(() => res.status(400).send({error: "Erreur de récupération"}));

};

module.exports.delete = (req, res, next) => {
    const {_id} = req.body;
    User.findByIdAndDelete(_id).then(function (user) {
        res.status(200).json({
            user: user
        });
    })
        .catch(() => res.status(400).send({error: "Erreur de suppréssion"}));
};




