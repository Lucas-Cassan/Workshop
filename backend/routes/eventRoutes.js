const router = require("express").Router();

// Controllers
const eventController = require("../controllers/eventController");
const verifyToken = require('../middlewares/verifyToken')

// Auth
router.post("/createEvent", verifyToken, eventController.createEvent);
router.post("/getAllEvent", verifyToken, eventController.getAllEvent);
router.post("/getOne", eventController.getOne);
router.post("/updateOne", eventController.updateOne);
router.post("/delete", verifyToken, eventController.delete);

module.exports = router;