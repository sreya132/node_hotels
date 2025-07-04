const express = require('express')
const router = express.Router()

//import person here
const MenuItem = require('./../models/MenuItem.js');



//Post route to addmenuItem
router.post('/',async (req,res)=>{
    try{
        const dataNext = req.body 

        //create a new menuItem doc using Mongoose
        const newMenuItem = new MenuItem(dataNext)

        //save the new menuItem to the database
        const saveNewData = await newMenuItem.save()
        console.log("Data Saved");
        res.status(200).json(saveNewData)
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})



//Get  method to get the menuItem
router.get('/',async(req,res)=>{
    try{
        const allsaveNewData = await MenuItem.find()
        console.log("Data fetched");
        res.status(200).json(allsaveNewData)

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})


//specification
router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType = req.params.tasteType
        if(tasteType == 'sour' || tasteType == 'sweet' || tasteType == 'spicy' ){
            const saveTaste = await MenuItem.find({taste:tasteType})
            console.log("Response Fetched");
            res.status(200).json(saveTaste)

        }else{
            res.status(500).json({error: "Internal Server Error"})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})



module.exports = router

