const express = require('express')
const router = express.Router()

//import person here
const Person = require('./../models/Person.js');


//POST route to add a person
router.post ('/', async(req,res)=>{
    try {
        const data = req.body //assuming the request body contains the data
        
        //create a new person doc using Mongoose
        const newPerson = new Person (data) 

        //save the new Person to the database
        const savaData = await newPerson.save()
        console.log('Data Saved')
        res.status(200).json(savaData)
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})        

    }
})


//get method to get the person
router.get('/', async (req,res)=>{
    try{
        const data = await Person.find()
        console.log('data fetched')
        res.status(200).json(data)

    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal Server Error"})        
    }
})


//for specific endpoint 
router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType // extract the work type from url parameter
        if(workType == 'chef' || workType == 'mannager'|| workType == 'owner' || workType == 'waiter' || workType == 'cleaner'){
            const saveWork = await Person.find({work: workType}) //work is beacuse i used "work" in person schema 
            console.log("Response Fetched");
            res.status(200).json(saveWork)
        }else{
            res.status(500).json({error: "Internal Server Error"})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})




module.exports = router