const express = require('express')
const app = express()
const { configDotenv } = require('dotenv')
const cors = require('cors')

const contactRouter = require('./routes/contactRouter')

configDotenv()

const PORT = process.env.PORT


app.use(express.json())

const allowedOrigins = [
    'http://localhost:5173',
    'https://shivam-portfolio.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use('/api', contactRouter)

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);

})