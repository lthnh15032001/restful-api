
"use strict";
const express = require('express')
const router = express.Router()
const Incomes = require('../models/Incomes')
router.get('/', async (req, res) => {
    try {
        const IncomesFind = await Incomes.find()
        res.json(IncomesFind)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { id, user_id, income_type, amount, period, payment_method, created_at } = req.body;
    const IncomesModel = new Incomes({
        id: id,
        user_id: user_id,
        income_type: income_type,
        amount: amount,
        period: period,
        payment_method: payment_method,
        created_at: created_at
    })
    try {
        const IncomesModelSave = await IncomesModel.save()
        res.json(IncomesModelSave)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;