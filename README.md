# Spa Appointment Booking System

A web application designed to streamline the process of booking, modifying, and canceling spa appointments. The project allows users to easily book appointments, modify them by entering phone numbers, and cancel appointments as needed. Built using **Node.js** and **Express.js** for the backend, and a simple HTML interface to interact with the system.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Frontend](#frontend)
- [Backend](#backend)
- [License](#license)
- [Contact](#contact)

## Project Overview

The **Spa Appointment Booking System** provides a simple way for customers to book, modify, and cancel spa appointments. It stores appointment data in a text file (`appointments.txt`) using JSON format, simulating a database. This project is built for simplicity and to demonstrate basic CRUD operations with Node.js.

## Tech Stack

- **Frontend**: HTML
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON file (`appointments.txt`)
- **Version Control**: Git

## Features

- **Book Appointments**: Users can book new appointments by filling out a form.
- **Modify Appointments**: Modify existing appointments using the phone number.
- **Cancel Appointments**: Users can cancel appointments by providing the phone number.
- **Appointment Data Storage**: Appointment details are stored in a JSON file (`appointments.txt`).
- **Error Handling**: The app provides appropriate error messages when the requested operations cannot be performed.

## Installation

### Clone the Repository

1. Clone the repository:
    ```sh
    git clone https://github.com/swaraj29/spa__appointment.git
    cd spa__appointment
    ```

### Install Dependencies

2. Install the dependencies for the backend:
    ```sh
    cd backend
    npm install
    ```

### Run the App

3. **Run the Backend**:
    ```sh
    cd backend
    npm start
    ```

    The server will run on `http://localhost:3000` by default.

4. **Access the Application**:

    Once the backend is running, open your browser and go to:
    ```
    http://localhost:3000
    ```

## Frontend

The frontend is a basic HTML page that allows users to:

- Book appointments by providing details like the name, phone number, service type, and time.
- Modify appointments by entering the phone number and selecting the new time.
- Cancel appointments by entering the phone number.

## Backend

The backend is built using **Node.js** and **Express.js**. It handles the following tasks:

- **Booking Appointments**: Receives and processes data for new appointments.
- **Modify Appointments**: Modifies existing appointments based on phone number.
- **Cancel Appointments**: Cancels appointments by phone number.
- **Data Storage**: All appointments are stored in `appointments.txt` in JSON format.

### Backend API Endpoints

- **GET /**: Serves the HTML page for booking appointments.
  
- **POST /submit-booking**: Creates a new appointment or modifies an existing one.
  
- **POST /modify-appointment**: Modifies an appointment based on the provided phone number.
  
- **POST /cancel-appointment**: Cancels an appointment based on the provided phone number.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For support or inquiries, please contact [028swarajkumar@gmail.com](mailto:028swarajkumar@gmail.com).
