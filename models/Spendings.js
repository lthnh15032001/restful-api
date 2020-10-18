const mongoose = require('mongoose');
const Spendings = new mongoose.Schema({
    id: { type: String },
    user_id: { type: String },
    spending_type: { type: String },
    amount: { type: Number },
    period: { type: String },
    payment_method: { type: String },
    created_at: { type: Date },
})

module.exports = mongoose.model('Spendings', Spendings)
