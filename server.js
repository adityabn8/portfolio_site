const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'prod-build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'prod-build', 'index.html'));
});

app.use('/api/users', userRoutes)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Database connected successfully!");
  app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));
})
.catch(err => {
  console.error('Database connection failed:', err);
  process.exit();
});