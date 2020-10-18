
"use strict";
const express = require('express')
const router = express.Router()
const Debt = require('../models/Debts')
router.get('/', async (req, res) => {
    try {
        const DebtFind = await Debt.find()
        res.json(DebtFind)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { id, user_id, debt_type, amount, period, payment_method, created_at } = req.body;
    const DebtModel = new Debt({
        id: id,
        user_id: user_id,
        debt_type: debt_type,
        amount: amount,
        period: period,
        payment_method: payment_method,
        created_at: created_at
    })
    try {
        const DebtModelSave = await DebtModel.save()
        res.json(DebtModelSave)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;