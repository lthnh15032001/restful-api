
"use strict";
const express = require('express')
const router = express.Router()
const CreditProfiles = require('../models/CreditProfiles')

router.get('/', async (req, res) => {
    try {
        const credits = await CreditProfiles.find()
        res.json({ creditProfile: credits, status: 200 })
    } catch (err) {
        res.json({ message: err })
    }
})
router.post("/", async (req, res) => {
    const {
        user_id,
        credit_score,
        amount_net_worth,
        amount_cash_total,
        amount_spending_total,
        amount_debt_total,
        amount_hourly_wages
    } = req.body;
    const Credit = new CreditProfiles({
        user_id: user_id,
        credit_score: credit_score,
        amount_net_worth: amount_net_worth,
        amount_cash_total: amount_cash_total,
        amount_spending_total: amount_spending_total,
        amount_debt_total: amount_debt_total,
        amount_hourly_wages: amount_hourly_wages
    })
    try {
        const credits = await Credit.save()
        res.json(credits)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router;