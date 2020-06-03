const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    tag:{
        type: Array,
    },
    isComplete:{
        type:Boolean
    },
    isStar:{
        type: Boolean
    }
})

module.exports = mongoose.model('Note', NoteSchema)