const nodemailer = require('nodemailer')
const { configDotenv } = require('dotenv')
configDotenv()

console.log("ENV CHECK:", process.env.SMTP_USER);
console.log("ENV CHECK PASS:", process.env.SMTP_PASS);
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

module.exports = transporter