const express = require('express')
const app = express();
const router = require("./routes/routes")
const DB = require('./db/connection')
app.use(express.json())

DB.connectToMongoDB()
app.use(router)

app.listen(4000, () => {
    console.log('server started at port 4000');
})