//require everything we're gonna need//
const express = require('express');
const cors = require('cors');

//what helps us connect to our mongoDB database//
const mongoose = require('mongoose');

//configures so we can have our environment variables in the .env file//
require('dotenv').config();

//how we create our express server//
const app = express();
const port = process.env.port || 5000;

//middleware - express.js allows us to pars json because our server lets us send and receive json//
app.use(cors());
app.use(express.json);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//what starts the server//
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})