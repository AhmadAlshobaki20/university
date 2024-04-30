const express = require("express");
const morgan = require('morgan');
const userRouter = require("./routes/user")
const postsRouter = require("./routes/post")
const cors = require("cors");
const app = express();


app.use(express.json())
app.use(morgan("dev"))
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postsRouter);


// Define your error handling middleware function
function errorHandler(err, req, res, next) {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went worng!"
    console.log(errorMessage)
    res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
}
app.use(errorHandler);


module.exports = app;
