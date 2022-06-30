const router = require('express').Router();
const userController =require("../controllers/userController")
const { authenticateToken } = require("../auth/authUser");


router.post("/logIn", userController.logIn);
router.get("/defaultGetUser", userController.defaultGetUser);
router.post("/registerNewUser", userController.registerNewUser )





module.exports = router