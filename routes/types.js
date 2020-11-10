
"use strict";
const express = require('express')
const router = express.Router()
const Types = require('../models/Types')
router.get('/', async (req, res) => {
    try {
        const users = await Types.find()
        res.json(users)
    } catch (err) {
        res.json({ message: err })
    }
})


router.post('/', async (req, res) => {
    const { name, element } = req.body;
    const TypesModel = new Types({
        name: name,
        element: element
    })
    try {
        const TypesModelName = await TypesModel.save()
        res.json(TypesModelName)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:typeid', async (req, res) => {
    const { name, element } = req.body;
    try {
        const _id = req.params.typeid;
        const updateTypes = await Types.updateOne({ _id: _id }, {
            $set: {
                name: name,
                element: element
            }
        })
        res.json(updateTypes)
    } catch (err) {
        res.json({ message: err })
    }
})

// export default router;
module.exports = router;