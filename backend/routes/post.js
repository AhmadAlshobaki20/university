const express = require('express');
const postController = require('../controller/post/postService');
const authConrtoller = require('../controller/users/auth')
const router = express.Router();


router.route('/').post(authConrtoller.protect, postController.createPost).get(authConrtoller.protect, postController.getPosts);

module.exports = router;