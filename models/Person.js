const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')

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
    },
    username:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    }
});


//starting hashing
personSchema.pre('save', async function(next) {
    const person = this

    if(!person.isModified ('password'))
        return next()

    try {
        //adding salt with password...can be 10 or more but time complexity
        const salt = await bcrypt.genSalt(10)
        //hash password
        const hashedPassword = await bcrypt.hash(person.password, salt)
        //override the plain password with the hash password 
        person.password = hashedPassword
        next()
    }catch(err){
        return next(err)
    }
});

personSchema.methods.comparePassword = async function (candidatePassword){
    try {
        //use bcrypt to compare the provided psw with the hashes one
        const isMatch = await bcrypt.compare(candidatePassword, this.password)
        return isMatch

    }catch(err){
        throw err
    }
}

//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;