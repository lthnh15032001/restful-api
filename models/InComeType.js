const mongoose = require('mongoose');
const IncomeType = new mongoose.Schema({
    name: { type: String },
    iconUrl: { type: String },
    parentId: { type: String },
})

module.exports = mongoose.model('IncomeType', IncomeType)
