const express = require("express");
const { getAllColleges, addManyColleges, findById, findSimilarCollege, findByName } = require("../controllers/CollegeController");


const router = express.Router();

router.get("/", getAllColleges);
router.get("/byId/:id", findById);
router.get("/byName/:name", findByName);
router.get("/similarCollege/:id", findSimilarCollege);
router.post("/", addManyColleges);

module.exports = router;