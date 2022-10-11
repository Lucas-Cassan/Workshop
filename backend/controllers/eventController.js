const Event = require("../models/eventModel");
const User = require("../models/userModel");
const jwt_decode = require("jwt-decode");
const { ObjectId } = require('mongodb')

module.exports.createEvent = (req, res) => {

    const {date, wording, description, place, token} = req.body;

    let decoded = jwt_decode(token);

    User.find({ email: decoded.user}).then((user) => {
        if(!user){
            return res.status(400).send("User not found");
        }else{
            const event = new Event({
                wording: wording,
                description: description,
                date: date,
                owner: user[0].name+" "+user[0].lastName,
                place: place,
                registered: [ObjectId(user._id)]
              });
              event
                .save()
                .then(() => {
                    res.status(200).send("Event created");
                })
        }
    })
};

module.exports.getAllEvent = (req, res) => {
    Event.find({}).then(function (event) {
        res.status(200).json({
          event: event
        });
      })
      .catch(() => res.status(400).send({ error: "Erreur de récupération" }));
};

module.exports.getOne = (req, res) => {
    const id = req.body._id;
    Event.findById(id).then(function (event) {
        res.status(200).json({
          event: event
        });
      })
      .catch(() => res.status(400).send({ error: "Erreur de récupération" }));
};

module.exports.updateOne = (req, res) => {
    const {date, wording, place, description} = req.body;
    const id = req.body._id;
    Event.updateOne({_id: id}, {$set : {
        date: date,
        place: place,
        wording: wording,
        description: description,
    }})
      .then(() => {
        res.send("Updated");
      })
      .catch(() => res.status(400).send({ error: "Erreur de modification" }));
};

module.exports.delete = (req, res) => {
    const id = req.body._id;
    Event.findByIdAndDelete({_id: id})
      .then(() => {
        res.send("Delete");
      })
      .catch(() => res.status(400).send({ error: "Erreur de modification" }));
};

module.exports.registered = (req, res) => {
    const { token, idEvent } = req.body;
    let decoded = jwt_decode(token);

    Event.findById(idEvent).then(function (event){
        User.findOne({email: decoded.user}).then(function (user){
            event.registered.push(ObjectId(user._id));
            Event.updateOne({_id: event._id}, {$set : {
                registered: event.registered
            }})
              .then(() => {
                return res.send("update not first time");
              })
              .catch(() => res.status(400).send({ error: "Erreur d'update not first time" }));
        }).catch(() => res.status(400).send({ error: "Erreur de récupération de l'utilisateur"}))
    }).catch(() => res.status(400).send({ error: "Erreur de récupération de l'event"}))
    
};