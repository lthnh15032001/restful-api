
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

// export default router;
module.exports = router;