const fs = require('fs');
const path = require('path');

// Path to the appointments file
const appointmentsFilePath = path.join(__dirname, '../data/appointments.txt');

// Load appointments from the file
const loadAppointmentsFromFile = () => {
  try {
    const data = fs.readFileSync(appointmentsFilePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error loading appointments:', error);
    return [];
  }
};

// Save appointments to the file
const saveAppointmentsToFile = (appointments) => {
  try {
    fs.writeFileSync(appointmentsFilePath, JSON.stringify(appointments, null, 2));
  } catch (error) {
    console.error('Error saving appointments:', error);
  }
};

// Book a new appointment or modify an existing one
const bookOrModifyAppointment = (appointment) => {
  const appointments = loadAppointmentsFromFile();
  const existingAppointmentIndex = appointments.findIndex((appt) => appt.phone === appointment.phone);

  if (existingAppointmentIndex !== -1) {
    // Modify existing appointment
    appointments[existingAppointmentIndex] = { ...appointments[existingAppointmentIndex], ...appointment };
  } else {
    // Book new appointment
    appointments.push(appointment);
  }

  saveAppointmentsToFile(appointments);
};

// Modify an existing appointment based on phone number
const modifyAppointment = (phone, updatedData) => {
  const appointments = loadAppointmentsFromFile();
  const appointmentIndex = appointments.findIndex((appt) => appt.phone === phone);

  if (appointmentIndex !== -1) {
    appointments[appointmentIndex] = { ...appointments[appointmentIndex], ...updatedData };
    saveAppointmentsToFile(appointments);
    return true;
  }
  return false;
};

// Cancel an appointment based on phone number
const cancelAppointment = (phone) => {
  const appointments = loadAppointmentsFromFile();
  const filteredAppointments = appointments.filter((appt) => appt.phone !== phone);

  if (appointments.length !== filteredAppointments.length) {
    saveAppointmentsToFile(filteredAppointments);
    return true;
  }
  return false;
};

// Validate the appointment data to ensure all required fields are present
const validateAppointmentData = (appointment) => {
  const { name, phone, date, time, service } = appointment;
  if (!name || !phone || !date || !time || !service) {
    return { valid: false, message: 'All fields are required.' };
  }
  return { valid: true };
};

module.exports = {
  bookOrModifyAppointment,
  modifyAppointment,
  cancelAppointment,
  loadAppointmentsFromFile,
  saveAppointmentsToFile,
  validateAppointmentData
};
