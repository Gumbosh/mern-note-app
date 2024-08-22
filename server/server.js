require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/notes.js');

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Use note routes
app.use('/api/notes', noteRoutes);

// Connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database');
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
