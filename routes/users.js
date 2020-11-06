
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
    const { profile, updated_at, created_at, last_active, spending, debt, income, id_fb } = req.body;
    const {
        full_name,
        avatar,
        birthday,
        emails,
        phones,
        addresses,
        passport,
        occupations,
        id_card
    } = profile;
    // const { spending_type, spending_amount, spending_period, spending_payment_method, spending_created_at } = spending
    // const { debt_type, debt_amount, debt_period, debt_payment_method, debt_created_at } = debt
    // const { income_type, income_amount, income_period, income_payment_method, income_created_at } = income
    const UsersModel = new userSchema({
        id_fb: id_fb,
        profile: {
            full_name: full_name,
            avatar: avatar,
            birthday: birthday,
            emails: emails,
            phones: phones,
            addresses: addresses,
            occupations: occupations,
            passport: passport,
            id_card: id_card
        },
        spending: spending,
        debt: debt,
        income: income,
        updated_at: updated_at,
        created_at: created_at,
        last_active: last_active
    })
    try {
        const usersSave = await UsersModel.save()
        res.json(usersSave)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:userId', async (req, res) => {
    const { profile, updated_at, created_at, last_active, spending, debt, income } = req.body;
    const {
        full_name,
        avatar,
        birthday,
        emails,
        phones,
        addresses,
        passport,
        occupations,
        id_card
    } = profile;
    // const { spending_type, spending_amount, spending_period, spending_payment_method, spending_created_at } = spending
    // const { debt_type, debt_amount, debt_period, debt_payment_method, debt_created_at } = debt
    // const { income_type, income_amount, income_period, income_payment_method, income_created_at } = income
    try {
        const _id = req.params.userId;
        const updateUser = await userSchema.updateOne({ _id: _id }, {
            $set: {
                profile: {
                    full_name: full_name,
                    avatar: avatar,
                    birthday: birthday,
                    emails: emails,
                    phones: phones,
                    addresses: addresses,
                    occupations: occupations,
                    passport: passport,
                    id_card: id_card
                },
                spending: spending,
                debt: debt,
                income: income,
                updated_at: updated_at,
                created_at: created_at,
                last_active: last_active
            }
        })
        res.json(updateUser)
    } catch (err) {
        res.json({ message: err })
    }
})

// export default router;
module.exports = router;