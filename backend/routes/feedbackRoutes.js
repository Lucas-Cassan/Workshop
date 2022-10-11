const router = require("express").Router();

// Controllers
const feedbackController = require("../controllers/feedbackController");
const verifyToken = require("../middlewares/verifyToken");

// Auth
router.post("/create", verifyToken,  feedbackController.create);
router.get("/all", verifyToken,  feedbackController.all);
router.get("/get", verifyToken,  feedbackController.get);
router.delete("/delete", verifyToken,  feedbackController.delete);
router.put("/update", verifyToken,  feedbackController.update);

module.exports = router;