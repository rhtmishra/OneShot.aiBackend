const { Schema, model } =  require("mongoose")

const CollegeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    yearFounded: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    numberOfStudents: {
        type: Number,
        default: 0
    },
    courses: [{
        type: String,
        default: null
    }],
   

}, { timestamps: true})


module.exports = model("College", CollegeSchema)


