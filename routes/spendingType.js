
"use strict";
const express = require('express')
const router = express.Router()
const SpendingTypes = require('../models/SpendingTypes')
router.get('/', async (req, res) => {
    try {
        const Spending = await SpendingTypes.find()
        res.json(Spending)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { id, name } = req.body;
    const Spending = new SpendingTypes({
        id: id,
        name: name
    })
    try {
        const SpendingSave = await Spending.save()
        res.json(SpendingSave)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;