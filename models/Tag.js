const mongoose = require('mongoose')

const TagSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tag', TagSchema)