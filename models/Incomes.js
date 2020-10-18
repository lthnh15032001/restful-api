const mongoose = require('mongoose');
const Income = new mongoose.Schema({
    id: { type: String },
    user_id: { type: String },
    income_type: { type: String },
    amount: { type: Number },
    period: { type: String },
    payment_method: { type: String },
    created_at: { type: Date },
})

module.exports = mongoose.model('Income', Income)
