const express = require('express')
const router = express.Router()
const todoList = require('../models/TodoList')


router.get('/', async (req, res) => {
    // res.send(req.user) // lấy id và iat người dùng
    // User.findbyOne({ _id: req.user })// lấy details người dùng
    try {
        const todo = await todoList.find();
        console.log("get all tasks")
        res.json(todo)
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const todo = new todoList({
        nameTask: req.body.nameTask,
        dateExpiration: req.body.dateExpiration,
        repeat: req.body.repeat,
        star: req.body.star,
        tag: req.body.tag
    });
    try {
        const savedPost = await todo.save();
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

router.get('/dat', async (req, res) => {
    try {
        const todoSpecify = await todoList.findById(req.query.id)
        console.log(req.query.id)
        res.json(todoSpecify)
    } catch (err) {
        res.json({ message: err })
    }
})

router.delete('/:toDoId', async (req, res) => {
    try {
        const removeTodoId = await todoList.deleteOne({ _id: req.params.toDoId })
        res.json(removeTodoId)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:todoId', async (req, res) => {
    try {
        const updateTodoList = await todoList.updateOne({ _id: req.params.todoId },
            {
                $set: {
                    nameTask: req.body.nameTask,
                    dateExpiration: req.body.dateExpiration,
                    repeat: req.body.repeat,
                    star: req.body.star,
                    tag: req.body.tag
                }
            })
        res.json(updateTodoList)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router