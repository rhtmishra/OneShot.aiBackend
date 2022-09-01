const Student = require("../models/Student");
const College = require("../models/College");
const createError = require("http-errors");

module.exports.getAllStudents = async (req, res, next) => {
  try {
    let students = await Student.find({}).populate("collegeId").exec();
    // students = await students.populate("collegeId").exec();
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
};

module.exports.addManyStudents = async (req, res, next) => {
  try {
    const students = await Student.insertMany(req.body);
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
};

module.exports.findById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id).populate("collegeId");
    if (!student) throw createError.NotFound("Student with given id not found");
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
