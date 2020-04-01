const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    weekNumber: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Course', CourseSchema)