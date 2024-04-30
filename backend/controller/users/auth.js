const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const util = require("util")
const otp = require("../../models/otp")
const Token = require("../../models/token")
const SendEmail = require("../../utiltes/mail");
const crypto = require('crypto');


const createAndSendToken = (id) => {
    const token = jwt.sign({ _id: id }, process.env.SECTER_KEY, {
        expiresIn: process.env.EXPIRE_DATE
    })
    return token;
}


const genrateUsrename = (f_name, l_name) => {
    const array_of_user_name = []
    let i = 0;
    while (i < 3) {
        const number = Math.floor(Math.random() * 100) + 1;
        const username = f_name + l_name + number
        array_of_user_name.push(username)
        i++;
    }
    return array_of_user_name
}


exports.register = async (req, res, next) => {
    try {
        const username = genrateUsrename(req.body.first_name, req.body.last_name)
        const user = await User.findOne({ email: req.body?.email });
        if (user) return res.json({ message: "user already registred" });
        const newuser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            username: username,
        })

        const verifyToken = await new Token({
            userId: newuser?._id, token: crypto.randomBytes(16).toString('hex')
        }).save();

        const url = `http://localhost:8080/api/v1/users/confirm/${verifyToken.token}`

        const token = createAndSendToken(newuser._id);
        res.status(200).json({
            status: "success",
            token: token,
            data: {
                newuser
            }
        })
        SendEmail({ email: newuser?.email, url: url });
    } catch (error) {
        next(error)
    }
}


exports.verifyToken = async (req, res, next) => {
    try {
        const token = await Token.findOne({ token: req.params.token });
        if (!token) {
            return res.status(404).json({ message: "Token not found" });
        }

        await User.updateOne({ _id: token.userId }, { $set: { verfied: true } });
        await Token.findByIdAndDelete(token._id);

        res.status(200).json({ message: "Email verified" });
    } catch (error) {
        // Handle errors
        next(error);
    }
};


exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({
                message: "please provide email or password"
            })
        }
        const user = await User.findOne({ email: email }).select("+password")
        if (!user || !await user.checkPassword(password, user.password)) {
            return res.json({
                message: "Invalide Email or Password"
            })
        }

        const token = createAndSendToken(user._id);
        if (user?.verfied) {
            return res.status(200).json(
                {
                    status: "success",
                    data: {
                        token
                    }
                }
            )
        }
    } catch (error) {
        next(error)
    }
}


exports.protect = async (req, res, next) => {
    try {
        // get token from the header 
        let token;
        if (req.headers.authorization && req.headers.authorization.split(" ")[0] == "Bearer") {
            token = req.headers.authorization.split(" ")[1]
        }

        if (!token) {
            return res.status(403).json({
                message: "you are not authorized"
            })
        }
        // verify token extract the info from token 
        const decoed = await util.promisify(jwt.verify)(token, process.env.SECTER_KEY)

        // current user still exist 
        const currentUser = await User.findById(decoed._id)
        if (!currentUser) {
            return res.json({
                message: "Inavlied user"
            })
        }
        // set user's info into the request
        req.user = currentUser;
        next();
    } catch (error) {
        next(error)
    }
}