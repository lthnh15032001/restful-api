
"use strict";
const express = require('express')
const router = express.Router()
const CreditProfilesModel = require('../models/CreditProfiles')

router.get('/', async (req, res) => {
    try {
        const credits = await CreditProfilesModel.find()
        res.json({ creditProfile: credits, status: 200 })
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;