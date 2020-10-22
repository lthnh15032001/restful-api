const mongoose = require('mongoose');
const SpendingTypes = new mongoose.Schema({
    name: { type: String },
    iconUrl: { type: String },
    parentId: { type: String },
})

module.exports = mongoose.model('SpendingTypes', SpendingTypes)
