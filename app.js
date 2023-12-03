const express = require('express')
const app = express()
const logger = require('./logger')
const authorized = require('./authorized')

app.use([authorized,logger])
app.get('/',(req,res) => {
    res.send('Home Page')
})
app.get('/about',(req,res) => {
    res.send('About Page')
})
app.get('/api/explore',(req,res) => {
    res.send('Explore Page')
})
app.get('/api/shop',(req,res) => {
    res.send('Shop Page')
})

app.listen(5000, (req,res) => {
    console.log('Server is running')
})