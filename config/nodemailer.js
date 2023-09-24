require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {
        user: process.env.EMAIL,

        pass: process.env.PAS,
    },
});

module.exports = transporter;
