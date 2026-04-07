const axios = require("axios");

const sendContactMail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        console.log(" Sending via API...");

        await axios.post(
            "https://api.brevo.com/v3/smtp/email",
            {
                sender: {
                    email: process.env.SMTP_USER,
                },
                to: [
                    {
                        email: process.env.SMTP_USER,
                    },
                ],

                replyTo: {
                    email: email,
                    name: name
                },

                subject: "New Contact Message 🚀",
                textContent: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            },
            {
                headers: {
                    "api-key": process.env.SMTP_PASS,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(" Mail sent via API");

        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });

    } catch (error) {
        console.error(" API ERROR:", error.response?.data || error.message);

        return res.status(500).json({
            success: false,
            message: "Email sending failed",
        });
    }
};

module.exports = { sendContactMail };