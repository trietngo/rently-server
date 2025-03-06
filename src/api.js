const express = require('express')

const serverless = require('serverless-http')

const path = require('path')

console.log(__dirname);

const app = express()

const router = express.Router();

// const data = require('./public')

router.get('/', (req, res) => {
    res.send('Hi')
})

router.get('/hello', (req, res) => {
    res.json({
        "hello": "world"
    })
})

app.use('/.netlify/functions/api', router);

app.use('/models', express.static(__dirname + '/public'));

module.exports.handler = serverless(app);