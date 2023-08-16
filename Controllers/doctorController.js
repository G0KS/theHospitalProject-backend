const DOCTORS = require("../Models/doctorSchema");

exports.addDoctor = async (req, res) => {
   const { id, name, image, gender, age, department, email, time } = req.body;
   try {
      const doctor = await DOCTORS.findOne({ id });
      if (doctor) {
         res.status(403).json("ID already exists");
      } else {
         const newDoctor = new DOCTORS({
            id,
            name,
            image,
            gender,
            age,
            department,
            email,
            time,
            patients: [],
         });

         await newDoctor.save();
         res.status(200).json("New Doctor added successfully");
      }
   } catch (err) {
      res.status(401).json(err);
   }
};

exports.getAllDoctors = async (req, res) => {
   try {
      const allDoctors = await DOCTORS.find();
      res.status(200).json(allDoctors);
   } catch (err) {
      res.status(401).json(err);
   }
};
