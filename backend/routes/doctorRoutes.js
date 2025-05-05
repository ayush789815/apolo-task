const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Add a new doctor
router.post('/add-doctor', doctorController.addDoctor);

// List doctors with filters
router.get('/list-doctors', doctorController.listDoctors);

module.exports = router;