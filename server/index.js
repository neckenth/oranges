require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const volleyball = require('volleyball');
const utils = require('./utils');

const app = express();

const URL = 'https://api-v3.mbta.com/vehicles/?include=stop&filter%5Broute%5D=Orange';

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.get('/', (req, res) => {
  res.send('Building the orange line app');
});

app.get('/api/orange', async (req, res, next) => {
  const config = {
    headers: { Authorization: `bearer ${process.env.API_KEY}` },
  };
  try {
    const { data } = await axios.get(URL, config);
    return res.status(200).json(utils.getVehiclesAndStops(data));
  } catch (error) {
    return next(error);
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// error-handling middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
