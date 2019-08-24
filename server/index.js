require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

const URL = 'https://api-v3.mbta.com/vehicles';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Building the orange line app');
});

app.get('/orange', async (req, res, next) => {
  const config = {
    headers: { Authorization: `bearer ${process.env.API_KEY}` },
  };
  try {
    const vehicles = await axios.get(URL, config);
    res.send(vehicles.data);
  } catch (error) {
    next(error);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
