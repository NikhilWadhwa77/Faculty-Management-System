const mongoose = require("mongoose")
require('dotenv').config()

const uri = process.env.DB;

exports.connectToMongoDB = () => {
    mongoose.connect(uri,{ retryWrites: false}).then(() => {
        console.log("[ SUCCESS ] mongodb connected")
    }).catch((err) => {
        console.log("[ FAILED ] failed to connect mongodb")
        console.log(err)
    })
}
