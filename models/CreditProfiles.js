const mongoose = require('mongoose');
const CreditProfiles = new mongoose.Schema({
    user_id: { type: String },
    credit_score: { type: Number },
    amount_net_worth: { type: Number },
    amount_cash_total: { type: Number },
    amount_spending_total: { type: Number },
    amount_debt_total: { type: Number },
    amount_hourly_wages: { type: Number }
})

module.exports = mongoose.model('CreditProfiles', CreditProfiles)
