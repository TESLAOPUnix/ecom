const express = require("express");
const app = express();
const cors = require("cors")
const job = require('./routes/signup')
const user = require('./routes/user')

app.use(cors())
app.use("/api/v1", signup)
app.use("/api/v1", user)

app.listen(8282, () => {
    console.log("server started in port 8282");
});