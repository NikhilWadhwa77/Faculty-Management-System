const express = require('express');
const router = express.Router();
router.use(express.json());

const adminController = require('../controllers/adminController')
const facultyController = require('../controllers/facultyController')

router.use('/signup', adminController.register)
router.use('/signin', adminController.login)

router.use('/addFaculty', facultyController.addFaculty)
router.use('/deleteFaculty', facultyController.deleteFaculty)
router.use('/updateFaculty', facultyController.updateFaculty)
router.use('/getFaculty', facultyController.getFaculty)

module.exports = router