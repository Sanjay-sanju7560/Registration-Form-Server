// Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/route')
require('./DB/connection')



const regServer = express()
regServer.use(cors())

regServer.use(express.json())
regServer.use(router)
regServer.use('/uploads',express.static('./uploads'))






const PORT = 3000
regServer.listen(PORT,()=>{
    console.log(`register form server started at port :${PORT}`);
})
regServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red; >register form sever started !! Waiting for client request.. </h1>")
} )