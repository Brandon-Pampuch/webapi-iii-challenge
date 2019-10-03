const express = require('express')

const userRouter = require("./users/userRouter.js")
const postRouter = require("./posts/postRouter.js")

const router = express.Router();

router.use('/user', userRouter)
router.use('/posts', postRouter)

module.exports = router
