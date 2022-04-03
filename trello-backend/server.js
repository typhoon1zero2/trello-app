/*
    Imports dependencies
*/
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

/*
    Middleware
*/
app.use(cors());
app.use(express.json());


/*
    Listening Port
*/
app.listen(PORT, () => {
    `I am running on PORT: ${PORT}`;
})
