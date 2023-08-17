const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
   id: {
      type: Number,
      required: true,
      unique: true,
   },
   pname: {
      type: String,
      required: true,
   },
   age: {
      type: Number,
      required: true,
   },
   place: {
      type: String,
      required: true,
   },
   gender: {
      type: String,
      required: true,
   },
   department: {
      type: String,
      required: true,
   },
   doctor: {
      type: String,
      required: true,
   },
});

const patients = mongoose.model("patients", patientSchema);

module.exports = patients;
