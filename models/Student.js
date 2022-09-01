const { Schema, model } =  require("mongoose")

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    yearOfbatch: {
        type: String,
        required: true
    },
    collegeId: {
        type: Schema.Types.ObjectId,
        ref: "College",
        // default: null
    },
    skills: [{
        type: String,
        default: null
    }],
   

}, { timestamps: true})


module.exports = model("Student", StudentSchema)


