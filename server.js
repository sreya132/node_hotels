const express = require('express');
const app = express();


//import the database
const db = require('./db');

//add bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json()) //kaj kore req.body



app.get('/', function(req, res) {
    res.send("it is my resturent....am giving u menu");
});



//Import ther router files
const personRoutes = require ('./routes/personRoutes.js')
const menuItemRoutes = require ('./routes/menuItemRoutes.js')

//Use the route
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes)



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

app.listen(3000, () => {
    console.log("Server is live");
});
//add comments for testing
