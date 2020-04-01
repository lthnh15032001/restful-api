const express = require('express')
const router = express.Router()
const course = require('../models/Course')
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

router.get('/', async (req, res) => {
    try {
        const courseList = await course.find()
        res.json(courseList)
    } catch (err) {
        res.json({ message: err })
    }
})
router.get('/:courseId', async (req, res) => {
    try {
        const courseSpecify = await course.findById(req.params.courseId)
        res.json(courseSpecify)
    }
    catch (err) {
        res.json({ message: err })
    }
})
router.delete('/:courseId', async (req, res) => {
    try {
        const removeCourse = await course.deleteOne({ _id: req.params.courseId })
        res.json(removeCourse)
    } catch (err) {
        res.json({ message: err })
    }
})
router.patch('/:courseId', async (req, res) => {
    try {
        const updateCourse = await course.updateOne({ _id: req.params.courseId }, { $set: { name: req.body.name, weekNumber: req.body.weekNumber } })
        res.json(updateCourse)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router