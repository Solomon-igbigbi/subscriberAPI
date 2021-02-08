const express = require('express');
const app = express()
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect('mongodb://localhost/subscribers', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, 
(error) => {
    if(error) return error;
    console.log('connected to database')
})

const routes = require('./routes/routes')
app.use("/subscribers", routes)

module.exports = app;