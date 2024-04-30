const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 500
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    },
    Comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'COMMENT'
    }],
    img: { type: String }
});

const POST = mongoose.model('POST', postSchema);

module.exports = POST;