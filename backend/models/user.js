const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchmea = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "firstname is required field"]
    },
    last_name: {
        type: String,
        required: [true, "lastname is required field"]
    },
    username: [{
        type: String,
        required: [true, "username is required field"],
        trim: true,
        unique: true
    }],
    email: {
        type: String,
        required: [true, "email is required field"],
        trim: true,
        unique: true
    },
    Role: {
        type: String,
        enum: ["students", "teacher"]
    },
    password: {
        type: String,
        required: [true, "password is required field"],
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is required field"],
        select: false
    },
    user_photo: {
        type: String
    },
    verfied: {
        type: Boolean,
        default: false
    }
})

// I will encrypt the password
userSchmea.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

// instance method 
userSchmea.methods.checkPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const USER = mongoose.model("USER", userSchmea);

module.exports = USER;

