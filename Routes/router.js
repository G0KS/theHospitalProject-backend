const express = require("express");

const doctorController = require("../Controllers/doctorController");

const router = new express.Router();

router.post("/add-doctor", doctorController.addDoctor);

router.get("/get-all-doctors",doctorController.getAllDoctors)

module.exports = router;
