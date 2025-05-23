const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', require('./routes/authenticationRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
