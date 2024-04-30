const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 500
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    },
    img: { type: String },
});

const COMMENT = mongoose.model('COMMENT', commentSchema);

module.exports = COMMENT;