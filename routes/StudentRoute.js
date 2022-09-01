const express = require("express");
const { getAllStudents, addManyStudents, findById } = require("../controllers/StudentController");


const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", findById);
router.post("/", addManyStudents);

module.exports = router;