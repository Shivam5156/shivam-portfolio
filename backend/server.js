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

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// ✅ Express v4 safe preflight handler
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    return res.sendStatus(200);
  }
  next();
});

/* ---------------- MIDDLEWARE ---------------- */

app.use(express.json());

/* ---------------- ROUTES ---------------- */

app.get('/', (req, res) => {
  res.send("Server is running 🚀");
});

app.use('/api', contactRouter);

/* ---------------- 404 HANDLER ---------------- */

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* ---------------- START SERVER ---------------- */

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});