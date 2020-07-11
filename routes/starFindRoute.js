const express = require('express')
const router = express.Router()
const tag = require('../models/Tag')
const todoList = require('../models/TodoList') // TASKS
const Todo = require('../models/Todo')
const note = require('../models/Note')

router.post('/:tagId', async (req, res) => {
    try {
        const _idTag = req.params.tagId;
        const tagFind = await tag.findOne({ "_id": _idTag })
        let resultTasks = []
        const tasksFind = await todoList.find()
        for (let i = 0; i < tasksFind.length; i++) {
            let idTagInTasks = tasksFind[i].tag
            for (let j = 0; j < idTagInTasks.length; j++) {
                let resultId = idTagInTasks[j]._id
                if (resultId == _idTag) {
                    resultTasks.push(tasksFind[i])
                } else {
                    // console.log("khong add vao")
                }
            }
        }
        let resultTodo = []
        const todoFind = await Todo.find()
        for (let i = 0; i < todoFind.length; i++) {
            let idInTodoList = todoFind[i].tag
            for (let j = 0; j < idInTodoList.length; j++) {
                let resultId = idInTodoList[j]._id
                if (resultId == _idTag) {
                    resultTodo.push(todoFind[i])
                } else {

                }
            }
        }
        let resultNote = []
        const noteFind = await note.find()
        for (let i = 0; i < noteFind.length; i++) {
            let idNoteFind = noteFind[i].tag
            for (let j = 0; j < idNoteFind.length; j++) {
                let resultId = idNoteFind[j]._id
                if (resultId == _idTag) {
                    resultNote.push(noteFind[i])
                } else {

                }
            }
        }
        let model = { "tasks": resultTasks, "todoList": resultTodo, "note": resultNote }
        res.json(model)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router
