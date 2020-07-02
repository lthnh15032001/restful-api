const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    tag: {
        type: Array,
    },
    isComplete:{
        type: Boolean
    },
    isStar:{
        type: Boolean
    },
    list: {
        type: Array,
    }
}, { versionKey: false })

module.exports = mongoose.model('Todo', TodoSchema)