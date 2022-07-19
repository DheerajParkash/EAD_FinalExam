const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    domainName:{
        type:String,
        required:true
    },
    firstLetter:{
        type:String,
        required:true
    },
    visits:{
        type:Number,
        required:true
    },
    
}
);


const bookmark = new mongoose.model("bookmark", userSchema);

module.exports = bookmark;