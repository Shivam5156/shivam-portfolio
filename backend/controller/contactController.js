const transporter = require('../config/nodemailer')
const { configDotenv } = require('dotenv')
configDotenv()

const sendContactMail = async (req, res) => {
    try {

        const { email, name, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const mailOptions = {
            from: process.env.USER_MAIL,
            to: process.env.USER_MAIL,
            subject: "New Contact Message 🚀",
            replyTo: email,
            text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}`

        }

       await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Email sending failed"
        })
    }
}

module.exports = { sendContactMail }