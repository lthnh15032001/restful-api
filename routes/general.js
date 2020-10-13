
"use strict";
// import { Router } from "express";
// const router = Router();
const express = require('express')
const router = express.Router()
router.get('/', async (req, res) => {
    res.send("hello my friend oop")
    // try {
    //     const courseList = await course.find()
    //     res.json(courseList)
    // } catch (err) {
    //     res.json({ message: err })
    // }
})

// export default router;
module.exports = router;