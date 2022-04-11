const router = require('express').Router();
const userController =require("../controllers/userController")

router.get("/editUserInfo", userController.editUserInfo )

module.exports = router