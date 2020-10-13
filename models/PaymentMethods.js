
const mongoose = require('mongoose');
const PaymentMethodsModel = new mongoose.Schema({
    user_id: { type: String },
    type: { type: String },
    account_name: { type: String },
    account_number: { type: Number },
    branch_name: { type: String },
    bank_name: { type: String },
    amount_total: { type: Number },
    created_at: { type: Date },
    updated_at: { type: Date },
})

module.exports = mongoose.model('PaymentMethods', PaymentMethodsModel)
