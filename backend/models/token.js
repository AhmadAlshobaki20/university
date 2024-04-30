const mongoose = require("mongoose");

const tokenSchmea = new mongoose.Schema({
    userId: {
        type: String,
        ref: "User",
        required: true
    },
    token: {
        type: String,
        required: true
    }
})


const Token = mongoose.model("Token", tokenSchmea);
module.exports = Token;

