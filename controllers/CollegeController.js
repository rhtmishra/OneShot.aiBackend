const College = require("../models/College");
const createError = require("http-errors");


module.exports.getAllColleges = async (req, res, next)=> {
    try{
        const colleges = await College.find();
        res.status(200).json(colleges);

    }catch(err){
        next(err)
    }
}


module.exports.addManyColleges = async (req, res, next)=> {
    try{
        const colleges = await College.insertMany(req.body);
        res.status(200).json(colleges);

    }catch(err){
        next(err)
    }
}


module.exports.findById = async (req, res, next)=> {
    try{
        const college = await College.findById(req.params.id);
        if(!college) throw createError.NotFound("College with given id not found");
        res.status(200).json(college);

    }catch(err){
        next(err)
    }
}

module.exports.findByName = async (req, res, next)=> {
    try{
        const college = await College.findOne({name: req.params.name});
        if(!college) throw createError.NotFound("College with given id not found");
        res.status(200).json(college);

    }catch(err){
        next(err)
    }
}


module.exports.findSimilarCollege = async (req, res, next)=> {
    try{
        const college = await College.findById(req.params.id);
        if(!college) throw createError.NotFound("College with given id not found");

        const colleges = await College.find({city: college.city, courses: college.courses});
        res.status(200).json(colleges);

    }catch(err){
        next(err)
    }
}
