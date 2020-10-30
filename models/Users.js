const mongoose = require('mongoose');
// const Spendings = require('./Spendings.js')
const SpendingSchema = new mongoose.Schema({
    spending_type: { type: String },
    amount: { type: Number },
    period: { type: String },
    payment_method: { type: String },
    spending_created_at: { type: Date },
})
const DebtsSchema = new mongoose.Schema({
    debt_type: { type: String },
    amount: { type: Number },
    period: { type: String },
    payment_method: { type: String },
    debt_created_at: { type: Date },
})
const IncomeSchema = new mongoose.Schema({
    income_type: { type: String },
    amount: { type: Number },
    period: { type: String },
    payment_method: { type: String },
    income_created_at: { type: Date },
})
const userSchema = new mongoose.Schema({
    profile: {
        full_name: { type: String },
        avatar: { type: String },
        birthday: { type: Date },
        emails: { type: String },
        phones: { type: String },
        addresses: { type: String },
        occupations: { type: String },
        passport: { type: String },
        id_card: { type: String },
    },
    spending: [SpendingSchema],
    debt: [DebtsSchema],
    income: [IncomeSchema],
    updated_at: { type: Date },
    created_at: { type: Date },
    last_active: { type: Date },
})

module.exports = mongoose.model('userSchema', userSchema)
