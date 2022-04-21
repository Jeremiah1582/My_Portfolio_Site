const router = require('express').Router();
const userController =require("../controllers/userController")


router.post("/logIn", userController.logIn )
router.post("/registerNewUser", userController.registerNewUser )
router.post("/editUserInfo", userController.editUserInfo )
router.post("/deleteUser", userController.deleteUser )

module.exports = router