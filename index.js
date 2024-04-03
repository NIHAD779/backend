const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')


require('dotenv').config()

const app = express()
app.use(cors())
const db = process.env.MONGODB_URL;
mongoose.connect(db).then(console.log("Connected to database")).catch((error) =>{
    console.log("Failed to connect to datbase   ")
    console.log(error)  
});
app.use(express.json())

app.use(routes);


const port = 3000;

app.listen(port, ()=> {
console.log(`Server is running on port ${port}`)
})
