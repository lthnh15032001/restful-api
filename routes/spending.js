
"use strict";
const express = require('express')
const router = express.Router()
const Spendings = require('../models/Spendings.js')
router.get('/', async (req, res) => {
    try {
        const SpendingsFind = await Spendings.find()
        res.json(SpendingsFind)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { id, user_id, spending_type, amount, period, payment_method, created_at } = req.body;
    const SpendingsModel = new Spendings({
        id: id,
        user_id: user_id,
        spending_type: spending_type,
        amount: amount,
        period: period,
        payment_method: payment_method,
        created_at: created_at
    })
    try {
        const SpendingsModelSave = await SpendingsModel.save()
        res.json(SpendingsModelSave)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;