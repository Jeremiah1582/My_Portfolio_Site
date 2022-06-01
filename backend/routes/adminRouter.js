const router = require('express').Router();
const adminController = require("../controllers/adminController");

router.get("/getUser", adminController.getUser);
router.post("/addWorkExp", adminController.addWorkExp);
router.post("/updateWorkExp", adminController.updateWorkExp);
router.post("/removeWorkExp", adminController.removeWorkExp);
router.post("/deleteUser", adminController.deleteUser);
router.post("/editUserInfo", adminController.editUserInfo);
router.post("/testFunc", adminController.testFunc);

module.exports=router