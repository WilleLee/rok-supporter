const express = require("express");
const router = express.Router();
const controller = require("../controller");

//get
router.get("/readKingsMessage", controller.api.readKingsMessage);
router.get("/readAllCommanders", controller.api.readAllCommanders);
router.get("/readNews", controller.api.readNews);
router.get("/readAllNews", controller.api.readAllNews);


//post
router.post("/login", controller.api.login);
router.post("/kingsMessage", controller.api.kingsMessage);
router.post("/readCommander", controller.api.readCommander);
router.post("/postNews", controller.api.postNews);

module.exports = router;
