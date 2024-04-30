const User = require("../../models/user");

exports.getAllUser = async(req,res,next)=>{
    try {
        const users = await User.find();
        res.json({
            status:"success",
            result:users.length,
            data:{
                users
            }
        })
    } catch (error) {
        next(error)
    }
}