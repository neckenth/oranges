require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const volleyball = require('volleyball');
const utils = require('./utils');

const app = express();
app.use(volleyball);

const URL = 'https://api-v3.mbta.com/vehicles/?filter%5Broute%5D=Orange';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Building the orange line app');
});

app.get('/api/orange', async (req, res, next) => {
  const config = {
    headers: { Authorization: `bearer ${process.env.API_KEY}` },
  };
  try {
    const response = await axios.get(URL, config);
    const vehiclesArr = response.data.data;
    const newVehicles = vehiclesArr.filter((v) => !utils.vehicleIsNew(Number(v.attributes.label)));
    res.json(newVehicles);
  } catch (error) {
    next(error);
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
