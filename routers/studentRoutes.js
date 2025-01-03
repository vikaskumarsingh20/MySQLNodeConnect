const express = require('express');
const { getStudents } = require('/controller/studentController');
const router = express.Router();

// Route to get all students
router.get('/getall', getStudents);

module.exports = router;
