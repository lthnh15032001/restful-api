const mongoose = require('mongoose');
const ToDoSchema = mongoose.Schema({
    nameTask: {
        type: String,
        require: true
    },
    dateExpiration: {
        type: String,
    },
    repeat: {
        type: Boolean,
        default: false
    },
    star: {
        type: Boolean,
        default: false
    },
    tag:{
        type: Array,
    }
})
module.exports = mongoose.model('todoList', ToDoSchema)

