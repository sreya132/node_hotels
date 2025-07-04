const mongoose = require('mongoose')

//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum:["chef","mannager","owner","waiter","cleaner"],
        required: true
    },
    mobile:{
        type:Number,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    address:{
        type: String,
        required:true
    },
    sal:{
        type: Number,
        required:true
    }
});



//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;