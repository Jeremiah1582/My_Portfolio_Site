const router = require('express').Router();
const userController =require("../controllers/userController")
const authUser =require("../auth/authUser")

router.post("/logIn", userController.logIn )
router.get("/readUser", userController.readUser )
router.post("/registerNewUser", userController.registerNewUser )
router.post("/editUserInfo", authUser.authenticateToken, userController.editUserInfo);
router.post(
  "/deleteUser",authUser.authenticateToken, userController.deleteUser
);
router.post("/addWorkExp", userController.addWorkExp);
router.post("/updateWorkExp", userController.updateWorkExp);
router.post("/removeWorkExp", userController.removeWorkExp);

module.exports = router