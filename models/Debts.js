const mongoose = require('mongoose');
const Debts = new mongoose.Schema({
    id: { type: String },
    user_id: { type: String },
    debt_type: { type: String },
    amount: { type: Number },
    period: { type: String },
    payment_method: { type: String },
    created_at: { type: Date },
})

module.exports = mongoose.model('Debts', Debts)
