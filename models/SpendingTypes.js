const mongoose = require('mongoose');
const SpendingTypes = new mongoose.Schema({
    id: { type: String },
    name: { type: String }
})

module.exports = mongoose.model('SpendingTypes', SpendingTypes)
