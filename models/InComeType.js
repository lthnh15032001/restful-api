const mongoose = require('mongoose');
const IncomeType = new mongoose.Schema({
    id: { type: String },
    name: { type: String }
})

module.exports = mongoose.model('IncomeType', IncomeType)
