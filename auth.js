//add passport 
const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const Person = require('./models/Person.js');



//authentication logic 
passport.use(new localStrategy(async(USERNAME, PASSWORD, done)=> {
    try{
        console.log('received credentials:', USERNAME);
        const user = await Person.findOne({username:USERNAME})
        if (!user)
            return done(null, false,{ message: 'Incorrect username'})
        
        const isPassword = await user.comparePassword(PASSWORD)
        if (isPassword){
            return done(null, user)
        }else{
            return done(null, false,{message: 'Incorrect password'})

        }
    }catch(err){
         return done(err)
    }
}))

module.exports = passport;