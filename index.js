//1. import express
const express = require('express');

//.4 import cors
const cors = require('cors');
//import logic
const logic = require('./services/logic')

//import jsonweb token
//const jwt = require('jsonwebtoken')

//2. Create a server application using express
const server = express()

//5. use cors
server.use(cors({
    origin: 'http://localhost:4200'
}))
//6.
server.use(express.json())//Returns middleware that only parses json

//3. setup port for server application
server.listen(5000, () => {
    console.log('server listening on port 5000');
})

//7. API call to resolve -localhost:5000
server.get('/', (req, res) => {
    res.send('Welcome to backend')
})

server.post('/', (req, res) => {
    res.send('Server post')
})


//login - localhost:5000/login
server.post('/login', (req, res) => {
    console.log('Inside logi API call');
    console.log(req.body);
    //logic to resolve login request
    logic.login(req.body.username, req.body.password, req.body.year).then((response) => {
        res.status(response.statusCode).json(response)
    })
})