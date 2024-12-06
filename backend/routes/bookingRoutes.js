const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to book or modify an appointment
router.post('/submit-booking', async (req, res) => {
  const { name, phone, service, date, time, notes } = req.body;

  // Check for missing required fields
  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const appointment = { name, phone, service, date, time, notes };

  try {
    // Ensure the bookOrModifyAppointment function is asynchronous if needed
    await bookingController.bookOrModifyAppointment(appointment);
    res.status(200).json({ message: 'Appointment successfully booked/modified!' });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error saving appointment:', error);
    res.status(500).json({ message: 'Error saving appointment', error: error.message });
  }
});

// Route to modify an existing appointment
router.post('/modify-appointment', async (req, res) => {
  const { phone, service, date, time, notes } = req.body;

  // Check for missing phone number
  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  const updatedData = { service, date, time, notes };

  try {
    // Ensure the modifyAppointment function is asynchronous if needed
    const result = await bookingController.modifyAppointment(phone, updatedData);

    if (result) {
      res.status(200).json({ message: 'Appointment modified successfully' });
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error modifying appointment:', error);
    res.status(500).json({ message: 'Error modifying appointment', error: error.message });
  }
});

// Route to cancel an appointment
router.post('/cancel-appointment', async (req, res) => {
  const { phone } = req.body;

  // Check for missing phone number
  if (!phone) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  try {
    // Ensure the cancelAppointment function is asynchronous if needed
    const result = await bookingController.cancelAppointment(phone);

    if (result) {
      res.status(200).json({ message: 'Appointment canceled successfully' });
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error canceling appointment:', error);
    res.status(500).json({ message: 'Error canceling appointment', error: error.message });
  }
});

module.exports = router;
