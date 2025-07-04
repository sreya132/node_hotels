const mongoose= require('mongoose');

//define the mongodb connection URL
const mongoUrl= 'mongodb://localhost:27017/hotels'

//set up Mongodb connection
mongoose.connect(mongoUrl)

//get the default connection
//mongoose maintains a default connection object representing the mongodb connection
//db for connection b/t node and mongo
const db = mongoose.connection;

//define event listner for database connections
db.on('connected', () =>{
    console.log("connected to MongoDB server");
});

db.on('disconnected', ()=>{
    console.log("MongoDB disconnected");
});

db.on('error', () =>{
    console.log("MongoDB error in connection");
});

//export the database
module.exports = db;