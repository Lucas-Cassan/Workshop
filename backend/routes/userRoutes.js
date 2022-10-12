const router = require("express").Router();

// Controllers
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/all", userController.all);
router.get("/get", userController.get);
router.delete("/delete", userController.delete);



module.exports = router;
