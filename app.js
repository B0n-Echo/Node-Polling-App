const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var port = process.env.PORT || 3000;

// DB Config
require('./config/db')

const app = express();

const poll = require('./routes/poll');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Enable CORS

app.use(cors());

app.use('/poll', poll);

app.listen(port, ()=> console.log(`the server is running at ${port}`));