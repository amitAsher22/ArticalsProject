// 3rd Party Modules
const { Router } = require("express");
const router = Router();
const myController = require("../controllers/myController.js");
// Local Modules

//
// Requests
router.get("/getTableWebsites", myController.getTableWebsites);
router.get("/getTablearticals", myController.getTablearticals);
router.get("/getTableStatistics", myController.getTableStatistics);
router.get("/", myController.homePage);
router.get("/presentNewsYnet", myController.showMainArticalFromYnet);
router.get("/poureArticals", myController.show4SubArticals);

module.exports = router;
