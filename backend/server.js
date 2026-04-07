const express = require('express');
const app = express();
const { configDotenv } = require('dotenv');
const cors = require('cors');
const contactRouter = require('./routes/contactRouter');

configDotenv();

const PORT = process.env.PORT || 5000;

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
 
}));


app.use(express.json());


app.get('/', (req, res) => {
  res.send("Server is running 🚀");
});

app.use('/api', contactRouter);



app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});