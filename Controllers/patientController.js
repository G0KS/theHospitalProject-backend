const patients = require("../Models/patientSchema");

exports.addPatient = async (req, res) => {
   const { id, pname, age, place, gender, department, doctor } = req.body;
   try {
      const newPatient = new patients({
         id,
         pname,
         age,
         place,
         gender,
         department,
         doctor,
      });
      await newPatient.save();
      res.status(200).json("Patient added");
   } catch (err) {
      res.status(401).json(err);
   }
};

exports.getAllPatients = async (req, res) => {
   try {
      const allPatients = await patients.find();
      res.status(200).json(allPatients);
   } catch (err) {
      res.status(401).json(err);
   }
};
