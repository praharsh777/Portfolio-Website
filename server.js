const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from a .env file

const app = express();

app.use(cors());
app.use(express.json());

// Set up the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service, e.g., Gmail, SendGrid, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address from environment variable
    pass: process.env.EMAIL_PASS // Your email app password from environment variable
  }
});

// POST route to handle contact form submissions
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL_USER, // Recipient's email (your email)
    subject: `New Message from ${firstName} ${lastName}`, // Email subject
    text: `You have a new message from ${firstName} ${lastName}:
          Email: ${email}
          Phone: ${phone}
          Message: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ code: 500, message: "Failed to send email" });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ code: 200, message: "Message sent successfully!" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
