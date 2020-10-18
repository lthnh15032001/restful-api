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

router.post('/', async (req, res) => {
    const Course = new course({
        name: req.body.name,
        weekNumber: req.body.weekNumber
    });
    try {
        const savedCourse = await Course.save()
        res.json(savedCourse)
    } catch (err) {
        res.json({ message: err })
    }
})