const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })
const app = require("./App");



// connect data base 
const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then((res) => {
    console.log("connect database")
})
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("server listen to port", port)
})