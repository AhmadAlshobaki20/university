const express = require("express");
const userController = require("../controller/users/userController")
const authController = require("../controller/users/auth")
const router = express.Router();



// verify email
router.get("/confirm/:token", authController.verifyToken);
// register && login
router.post("/register", authController.register)
router.post("/login", authController.login)



router.route("/").get(authController.protect, userController.getAllUser);


module.exports = router;