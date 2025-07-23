const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


//const jwt = require('jsonwebtoken');//


//import the database
const db = require('./db');

//.env file import
require('dotenv').config()

//import auth
const passport = require('./auth.js')

//add bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json()) //kaj kore req.body


// Middileware Function
const logRequest = (req,res,next) =>{
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);// konsa url me hit hona chahata hay is the next one
    next() //if hit then go next
}
app.use(logRequest)



app.use(passport.initialize())

const localAuthMiddleware = passport.authenticate('local', {session:false})


app.get('/', (req, res) => {
    res.send("it is my resturent....am giving u menu");
});



//Import ther router files
const personRoutes = require ('./routes/personRoutes.js')
const menuItemRoutes = require ('./routes/menuItemRoutes.js');
const Person = require('./models/Person.js');

//Use the route
app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)



//showing endpoints.............
// app.get('/chicken',(req,res)=>{
//     res.send ("am serving u chicken")
// })

// app.get('/fuchka',(req,res)=>{
//     var customize={
//         name:"dahi_fuchka",
//         piece:30,
//         is_emli:false,
//         is_fau:true
//     }
//     res.send (customize)
// })

// app.post('/person', (req,res) =>{
//     res.send("data is saved")
// })

app.listen(PORT, () => {
    console.log("Server is live");
});
