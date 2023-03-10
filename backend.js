//CUSTOM - backend for keeping sensitive data safe
//npm i express cors dotenv axios 
//npm i rate limiter
//TERMINAL: nodemon backend.js - continuously run backend server

const PORT = 8000;

//import express and cors
const express = require('express');
const cors = require('cors');
//import dotenv and axios
const axios = require('axios');
require('dotenv').config();
//rate limiter to help with security?
// const rateLimit = require("express-rate-limit");

//listen to port 8000, call express(), callback function
const app = express();

app.use(cors());

// localhost:8000 while running backend.js
app.get('/', (req,res) => {
    res.json('hi')
});


//visit the url 
app.get('/api/keys', (req,res) => {
    res.json({
        publicKey: process.env.REACT_APP_PUBLIC_API_KEY,
        privateKey: process.env.REACT_APP_EMAILJS_PRIVATE_API_KEY,
        serviceID: process.env.REACT_APP_SERVICE_ID,
        templateID: process.env.REACT_APP_TEMPLATE_ID
    })
});



app.listen(8000, ()=>{
    console.log(`Listening on port ${PORT}`);
});