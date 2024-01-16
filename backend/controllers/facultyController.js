const Faculty = require('../models/facultyModel')

exports.addFaculty = async (req, res) => {
    console.log(req.body)
    try {
        const { name, email, branch, adminid } = req.body

        if (!name || !email) return res.status(400).send({ err: "failed to register enter details properly" })

        const userExists = await Faculty.findOne({ email: email })

        if (userExists) return res.status(403).send({ err: "User Already exists" })

        const faculty = new Faculty(req.body);
        await faculty.save()
        res.send({ msg: name + " Added succesfully" })

    } catch (err) {
        console.log(err)
        res.status(500).send({ err: "Failed to register" })
    }
}

exports.deleteFaculty = async (req, res) => {

    console.log(req.body)
    const { confirmEmail: email } = req.body;

    try {

        const faculty = await Faculty.findOneAndDelete({ email: email })

        if (faculty) return res.status(200).send({ msg: faculty.name + " Deleted Succesfully" })

        return res.status(404).send({ err: "Failed to delete Not found" })

    } catch (err) {
        console.log(err)
        res.status(500).send({ err: "Failed to delete" })
    }
}

exports.updateFaculty = (req, res) => {
    res.send({ msg: "update faculty" })
}

exports.getFaculty = async (req, res) => {
    const { id } = req.body
    const all = await Faculty.find({ adminid: id });
    res.status(200).send(all)
}