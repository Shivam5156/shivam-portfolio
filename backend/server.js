const express = require('express');
const app = express();
const { configDotenv } = require('dotenv');
const cors = require('cors');

const contactRouter = require('./routes/contactRouter');

configDotenv();

const PORT = process.env.PORT || 5000;

/* ---------------- CORS CONFIG ---------------- */

const allowedOrigins = [
  'http://localhost:5173',
  'https://shivam-portfolio-git-main-shivam5156s-projects.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
};

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ preflight handling
app.use(express.json());

/* ---------------- ROUTES ---------------- */

app.get('/', (req, res) => {
  res.send("Server is running 🚀");
});

app.use('/api', contactRouter);

/* ---------------- START SERVER ---------------- */

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});