const Event = require("../models/eventModel");
const User = require("../models/userModel");
const jwt_decode = require("jwt-decode");
const { ObjectId } = require('mongodb')

module.exports.createEvent = (req, res) => {

    const {date, wording, description, place} = req.body;

    const decoded = jwt_decode( req.headers['authorization']);

    User.findOne({ email: decoded.user}).then((user) => {
        if(!user){
            return res.status(400).send("User not found");
        }else{
            const event = new Event({
                wording: wording,
                description: description,
                date: date,
                owner: user.name+" "+user.lastName,
                place: place,
                registered: [ObjectId(user._id)]
              });
              event
                .save()
                .then(() => {
                    let kdo = false;
                    let finalXp = user.xp + 2;
                    if (finalXp>=10) {
                        kdo = true;
                        finalXp = finalXp-10;
                    }
                    User.updateOne({_id: user._id}, {xp: finalXp}).then(function () {
                        res.status(201).json({
                            message: "Event created",
                            cadeau: kdo
                        });
                    })
                })
        }
    })
};

module.exports.getAllEvent = (req, res) => {
    Event.find({}).then(function (event) {
        const {limit} = req.params;
        if (limit) {
            event.sort(function (a, b) {
                var dateA = new Date(a.date), dateB = new Date(b.date)
                return dateA - dateB
            });
            event = event.slice(0, 4);
        }
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
    const { idEvent } = req.body;
    const decoded = jwt_decode( req.headers['authorization']);

    Event.findById(idEvent).then(function (event){
        User.findOne({email: decoded.user}).then(function (user){
            if (!user) {
                throw new Error("Erreur de récupération de l'utilisateur")
            }
            if (event.registered.includes(user._id)) {
                throw new Error("Cet utilisateur est déja enregistré sur cet event")
            }
            event.registered.push(ObjectId(user._id));
            Event.updateOne({_id: event._id}, {$set : {
                registered: event.registered
            }})
              .then(() => {
                  let kdo = false;
                  let finalXp = user.xp + 1;
                  if (finalXp>=10) {
                      kdo = true;
                      finalXp = finalXp-10;
                  }
                  User.updateOne({_id: user._id}, {xp: finalXp}).then(function () {
                      res.status(201).json({
                          message: "Updated",
                          cadeau: kdo
                      });
                  })
              })
              .catch(() => res.status(400).send({ error: "Erreur d'update not first time" }));
        }).catch((error) => res.status(400).send({ error: error.message}))
    }).catch(() => res.status(400).send({ error: "Erreur de récupération de l'event"}))
    
};