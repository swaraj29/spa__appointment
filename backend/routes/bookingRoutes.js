const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to book or modify an appointment
router.post('/submit-booking', (req, res) => {
  const { name, phone, service, date, time, notes } = req.body;

  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const appointment = { name, phone, service, date, time, notes };

  try {
    bookingController.bookOrModifyAppointment(appointment);
    res.status(200).json({ message: 'Appointment successfully booked/modified!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving appointment' });
  }
});

// Route to modify an existing appointment
router.post('/modify-appointment', (req, res) => {
  const { phone, service, date, time, notes } = req.body;

  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  const updatedData = { service, date, time, notes };

  if (bookingController.modifyAppointment(phone, updatedData)) {
    res.status(200).json({ message: 'Appointment modified successfully' });
  } else {
    res.status(404).json({ message: 'Appointment not found' });
  }
});

// Route to cancel an appointment
router.post('/cancel-appointment', (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  if (bookingController.cancelAppointment(phone)) {
    res.status(200).json({ message: 'Appointment canceled successfully' });
  } else {
    res.status(404).json({ message: 'Appointment not found' });
  }
});

module.exports = router;
