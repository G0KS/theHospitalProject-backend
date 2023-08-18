const express = require("express");

const doctorController = require("../Controllers/doctorController");
const patientController = require("../Controllers/patientController")

const router = new express.Router();

router.post("/add-doctor", doctorController.addDoctor);

router.get("/get-all-doctors",doctorController.getAllDoctors)

router.post("/add-patient", patientController.addPatient);

router.get("/get-all-patients",patientController.getAllPatients)

router.delete("/delete-doctor/:id",doctorController.deleteDoctor)

module.exports = router;
