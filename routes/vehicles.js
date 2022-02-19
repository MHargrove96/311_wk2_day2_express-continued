const express = require("express");
const router = express.Router();
const vehiclesController = require("../controllers/vehicles");

router.get("/vehicles", vehiclesController.listAll);

router.get("/vehicles/:id", vehiclesController.listOne);

router.post("/vehicles/", vehiclesController.create);

module.exports = router;
