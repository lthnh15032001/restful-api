const express = require('express')
const router = express.Router()
const tag = require('../models/Tag')


router.get('/', async (req, res) => {
    try {
        const todo = await tag.find();
        res.json(todo)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const todo = new tag({
        name: req.body.name
    });
    try {
        const savedPost = await todo.save();
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/:toDoId', async (req, res) => {
    try {
        const todoSpecify = await tag.findById(req.params.toDoId)
        res.json(todoSpecify)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:toDoId', async (req, res) => {
    try {
        const removeTodoId = await tag.deleteOne({ _id: req.params.toDoId })
        res.json(removeTodoId)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:todoId', async (req, res) => {
    try {
        const updatetag = await tag.updateOne({ _id: req.params.todoId },
            {
                $set: {
                    name: req.body.name
                }
            })
        res.json(updatetag)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router