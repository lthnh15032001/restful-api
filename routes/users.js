
"use strict";
const express = require('express')
const router = express.Router()
const userSchema = require('../models/Users')
router.get('/', async (req, res) => {
    try {
        const users = await userSchema.find()
        res.json(users)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    try {
        const users = await userSchema.find()
        res.json({req: req.body})
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;