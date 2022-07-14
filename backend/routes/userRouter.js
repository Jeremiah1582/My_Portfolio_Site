const router = require('express').Router();
const userController =require("../controllers/userController")
const { authenticateToken } = require("../auth/authUser");
const multer = require("multer");

router.post("/logIn", userController.logIn);
router.get("/defaultGetUser", userController.defaultGetUser);
router.post("/registerNewUser", userController.registerNewUser )
router.post("/sendWhatsappMsg", userController.sendWhatsappMsg )
// router.post("/UploadCV",userController.uploadCV);





module.exports = router