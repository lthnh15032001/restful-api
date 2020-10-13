const mongoose = require('mongoose');

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
        required: true
    },
    updated_at: { type: Date },
    created_at: { type: Date },
    last_active: { type: Date },
})

module.exports = mongoose.model('userSchema', userSchema)
