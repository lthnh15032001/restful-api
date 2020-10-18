const mongoose = require('mongoose');
const DebtTypes = new mongoose.Schema({
    id: { type: String },
    name: { type: String }
})

module.exports = mongoose.model('DebtTypes', DebtTypes)
