const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
   id: {
      type: Number,
      required: true,
      unique: true,
   },
   name: {
      type: String,
      required: true,
   },
   image:{
      type: String,
      required: true,
   },
   gender: {
      type: String,
      required: true,
   },
   age: {
      type: Number,
      required: true,
   },
   department: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   time: {
      type: String,
      required: true,
   },
   patients: {
      type: Array,
      required: true,
   },
});

const DOCTORS = mongoose.model("DOCTORS", doctorSchema);

module.exports = DOCTORS;
