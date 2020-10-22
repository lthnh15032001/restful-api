
"use strict";
const express = require('express')
const router = express.Router()
const DebtTypes = require('../models/DebtTypes')
router.get('/', async (req, res) => {
    try {
        const Debt = await DebtTypes.find()
        res.json(Debt)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { name, iconUrl, parentId } = req.body;
    const DebtTypeModel = new DebtTypes({
        name: name,
        iconUrl: iconUrl,
        parentId: parentId,
    })
    try {
        const DebtTypeModelSave = await DebtTypeModel.save()
        res.json(DebtTypeModelSave)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;