const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
       
    },
    address: {
        type: String,

    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
    },
    dob: {
        type: String,
    },
    course: {
        type: String,
    }
})

const student = mongoose.model('student',studentSchema)

module.exports = student