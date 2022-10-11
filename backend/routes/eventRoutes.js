const router = require("express").Router();

// Controllers
const eventController = require("../controllers/eventController");
const verifyToken = require('../middlewares/verifyToken')

// Auth
router.post("/createEvent", verifyToken, eventController.createEvent);
router.get("/getAllEvent", verifyToken, eventController.getAllEvent);
router.get("/getOne", eventController.getOne);
router.put("/updateOne", eventController.updateOne);
router.delete("/delete", verifyToken, eventController.delete);
router.put("/registered", verifyToken, eventController.registered);

module.exports = router;