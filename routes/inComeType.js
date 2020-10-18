
"use strict";
const express = require('express')
const router = express.Router()
const InComeType = require('../models/InComeType')
router.get('/', async (req, res) => {
    try {
        const InCome = await InComeType.find()
        res.json(InCome)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const { id, name } = req.body;
    const InComeTypeModel = new InComeType({
        id: id,
        name: name
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