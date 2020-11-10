const mongoose = require('mongoose');
const Types = new mongoose.Schema({
    name: { type: String },
    element: { type: Array },
})

module.exports = mongoose.model('Types', Types)
