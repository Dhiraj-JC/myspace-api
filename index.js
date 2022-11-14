const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('mongoose');

const app = express();
dotenv.config();

connect(
  process.env.MONGODB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }

    console.log('Database connection established');
  }
);

app.use(express.json());
app.use(cors());
