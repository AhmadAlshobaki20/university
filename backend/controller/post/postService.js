const POST = require('../../models/post');

exports.createPost = async (req, res, next) => {
    try {
        const Post = await POST.create({
            title: req.body.title,
            userId: req.user._id,
            img: req.body.img,
            Comment: req.body.Comment
        });
        return res.json({
            status: "success",
            data: {
                Post
            }
        })
    } catch (error) {
        console.log("hello error")
        next(error)
    }
}

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await POST.find().populate('userId');
        return res.status(200).json({
            status: "success",
            data: {
                posts
            }
        })
    } catch (error) {
        next(error)
    }
}