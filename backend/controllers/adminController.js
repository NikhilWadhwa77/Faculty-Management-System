const Admin = require('../models/adminModel')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.register = async (req, res) => {
    console.log(req.body)
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) return res.status(400).send({ err: "Failed to register enter details properly" })

        // if (password !== cpassword) return res.status(400).send({ err: "Passwords do not match" })

        const userExist = await Admin.findOne({ email: email })

        if (userExist) return res.status(422).send({ err: "User already exists" })

        const admin = new Admin(req.body)
        await admin.save()
        res.status(200).send({ msg: "Registered Succesfully" })

    } catch (err) {
        console.log(err)
        res.status(500).send({ err: 'Failed to register' })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(400).send({ msg: "Invalid Credentials" })

    const admin = await Admin.findOne({ email: email })

    if (!admin) return res.status(404).send({ err: "User not found" })

    if (admin.password != password) return res.status(401).send({ err: "invalid credentials" })

    const token = jwt.sign({ _id: admin._id, name: admin.name }, process.env.SECRET_KEY)

    // console.log(token)

    res.cookie("token", token, {
        expiresIn: "1h",
        httpOnly: false
    })

    res.status(200).send({ msg: "logged in succesfully" })

}