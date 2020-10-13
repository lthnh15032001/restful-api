
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
    const { profile, updated_at, created_at, last_active } = req.body;
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
    const UsersModel = new userSchema({
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
// export default router;
module.exports = router;