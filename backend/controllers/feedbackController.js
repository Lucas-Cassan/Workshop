const bcrypt = require("bcrypt");
const Feedback = require("../models/feedbackModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode')

module.exports.create = (req, res, next) => {
  const { q1, q2, q3, text} = req.body;

const data = jwt_decode( req.headers['authorization']  );
const user = User.findOne({email: data.user}).then(function (user) {
    const feedback = new Feedback({
        date: Date.now(),
        q1: q1,
        q2: q2,
        q3: q3,
        text: text,
        user_id: user._id

    });
    feedback
        .save()
        .then(() => {
            res.status(201).json({
                message: "Feedback créé !"
            });
        })
        .catch(() => res.status(400).send({ error: "Erreur" }));
});

};

module.exports.all = (req, res, next) => {

  Feedback.find({}).then(function (feedbacks) {
        res.status(200).json({
          feedbacks: feedbacks
        });
      })
      .catch(() => res.status(400).send({ error: "Erreur de récupération" }));

};

module.exports.get = (req, res, next) => {
    const { _id } = req.body;
    Feedback.findById(_id).then(function (feedback) {
        res.status(200).json({
            feedback: feedback
        });
    })
        .catch(() => res.status(400).send({ error: "Erreur de récupération" }));

};

module.exports.delete = (req, res, next) => {
    const { _id } = req.body;
    Feedback.findByIdAndDelete(_id).then(function (feedback) {
        res.status(200).json({
            feedback: feedback
        });
    })
        .catch(() => res.status(400).send({ error: "Erreur de suppréssion" }));

};

module.exports.update = (req, res, next) => {
    const { _id, q1, q2, q3, text} = req.body;
    const update = {
        date: Date.now(),
        text: text,
        q1: q1,
        q2: q2,
        q3: q3
    };
    const data = jwt_decode( req.headers['authorization']);

    User.findOne({email: data.user}).then(function (user) {
        Feedback.findById(_id).then(function (feedback) {
            if (!feedback) {
                throw new Error("mauvais ID");
            }
                if (user._id.toString() !== feedback.user_id) {
                    throw new Error("Vous n'êtes pas le créateur de ce feedback");
                }
                Feedback.findByIdAndUpdate(_id, update).then(function (feedback) {
                    feedback.text = text;
                    feedback.q1 = q1
                    feedback.q2 = q2
                    feedback.q3 = q3
                    res.status(200).json({
                        feedback: feedback
                    });
                })
        })
            .catch((error) => res.status(500).send({ error: error.message}));
    });




};

