const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');

const connectDatabase = require('./config/database');

dotenv.config({ path: './config/config.env' });

connectDatabase();

const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `-- Server up and running in ${process.env.NODE_ENV} mode on port ${PORT}`,
  ),
);
