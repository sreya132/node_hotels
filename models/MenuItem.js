const mongoose = require('mongoose')

//define the menu schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ["sour","sweet","spicy"],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    num_sale:{
        type: Number,
        default: 0,
    }
})


//create menu model
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;