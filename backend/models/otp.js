const mongoose = require("mongoose");


const OtpScemah = mongoose.Schema({
    otp: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 300 } }
}, { timestapms: true })

const OTP = mongoose.model("OTP", OtpScemah);

module.exports = OTP;