
"use strict";
const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
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
    const UsersModel = new Users({
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
        const idFbExist = await Users.findOne({ id_fb: id_fb })
        if (idFbExist) {
            return res.json(idFbExist)
        } else {
            try {
                const usersSave = await UsersModel.save()
                res.json(usersSave)
            } catch (err) {
                res.json({ message123123: err })
            }
        }
    } catch (err) {
        res.json({ message__: err })
    }
})

router.post('/updateDebt/:userId', async (req, res) => {
    const { debt } = req.body
    if (!debt) {
        res.json({ error: "Nhập đầy đủ", })
    }
    try {
        const _id = req.params.userId;
        const updateUser = await Users.updateOne({ _id: _id }, {
            $push: {
                debt: debt
            }
        })
        res.json(updateUser)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/updateIncome/:userId', async (req, res) => {
    const { income } = req.body
    if (!income) {
        res.json({ error: "Nhập đầy đủ", })
    }
    try {
        const _id = req.params.userId;
        const updateUser = await Users.updateOne({ _id: _id }, {
            $push: {
                income: income
            }
        })
        res.json(updateUser)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/updateSpending/:userId', async (req, res) => {
    const { spending } = req.body
    if (!spending) {
        res.json({ error: "Nhập đầy đủ", })
    }
    try {
        const _id = req.params.userId;
        const updateUser = await Users.updateOne({ _id: _id }, {
            $push: {
                spending: spending
            }
        })
        res.json(updateUser)
    } catch (err) {
        res.json({ message: err })
    }
})

// export default router;
module.exports = router;