const express = require('express')
const router = express.Router()
const note = require('../models/Note')

router.get('/', async (req, res) => {
    try {
        const noteGet = await note.find();
        res.json(noteGet)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const todo = new note({
        name: req.body.name,
        tag: req.body.tag,
        isComplete: req.body.isComplete,
        isStar: req.body.isStar
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
        const todoSpecify = await note.findById(req.params.toDoId)
        res.json(todoSpecify)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:toDoId', async (req, res) => {
    try {
        const removeTodoId = await note.deleteOne({ _id: req.params.toDoId })
        res.json(removeTodoId)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:todoId', async (req, res) => {
    try {
        const updateTodoList = await note.updateOne({ _id: req.params.todoId },
            {
                $set: {
                    name: req.body.name,
                    tag: req.body.tag,
                    isComplete: req.body.isComplete,
                    isStar: req.body.isStar
                }
            })
        res.json(updateTodoList)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router