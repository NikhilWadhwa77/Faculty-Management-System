const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    branch: {
        type: String
    },
    adminid: {
        type: String,
        // required: true
    }
})

module.exports = new mongoose.model("faculties", facultySchema);