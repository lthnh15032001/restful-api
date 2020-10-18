
"use strict";
const express = require('express')
const router = express.Router()
const PaymentMethodsModel = require('../models/PaymentMethods')
router.get('/', async (req, res) => {
    try {
        const paymentMethod = await PaymentMethodsModel.find()
        res.json({ paymentMethod: paymentMethod, status: 200 })
    } catch (err) {
        res.json({ message: err })
    }
})
router.post("/", async (req, res) => {
    const {
        user_id,
        type,
        account_name,
        account_number,
        branch_name,
        bank_name,
        amount_total,
        created_at,
        updated_at
    } = req.body
    const PaymentMethod = new PaymentMethodsModel({
        user_id: user_id,
        type: type,
        account_name: account_name,
        account_number: account_number,
        branch_name: branch_name,
        bank_name: bank_name,
        amount_total: amount_total,
        created_at: created_at,
        updated_at: updated_at
    })
    try {
        const paymentSchema = await PaymentMethod.save()
        res.json(paymentSchema)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;