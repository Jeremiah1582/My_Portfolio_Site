const router = require('express').Router();
const userController =require("../controllers/userController")
const { authenticateToken } = require("../auth/authUser");


router.post("/logIn", userController.logIn);
router.get("/viewOnly/Jeremiah", userController.viewOnly);
router.post("/registerNewUser", userController.registerNewUser )





module.exports = router