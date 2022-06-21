const express = require('express')
const dbConnection = require('./dbConnection')
const Trades = require('./models')
const {errorLogger, infoLogger} = require('./logger')

// set port number
const PORT = process.env.PORT || 3333

// start express server
const app = express()

// connect to database
dbConnection()

// setup express app
app.use(express.json())

app.get('/trades/:limit', async (req, res)=>{

    try{
        const trades = await Trades.find().limit(req.params.limit)

        return res.status(200).json(trades)
    }catch(err){
        return res.status(500).json(err.message)
    }
})

// start server and listen for connections
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})