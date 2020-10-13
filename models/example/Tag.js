const mongoose = require('mongoose')

const TagSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Tag', TagSchema)