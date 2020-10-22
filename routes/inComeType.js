
"use strict";
const express = require('express')
const router = express.Router()
const IncomeType = require('../models/InComeType')
router.get('/', async (req, res) => {
    try {
        const InCome = await InComeType.find()
        res.json(InCome)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { name, iconUrl, parentId } = req.body;
    console.log(name, iconUrl, parentId)
    const InComeTypeModel = new IncomeType({
        name: name,
        iconUrl: iconUrl,
        parentId: parentId,
    })
    try {
        const InComeTypeModelSave = await InComeTypeModel.save()
        res.json(InComeTypeModelSave)
    } catch (err) {
        res.json({ message: err })
    }
})
// export default router;
module.exports = router;