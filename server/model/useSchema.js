const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    visits:{
        type:Number,
        required:true
    }
}
);


const bookmark = new mongoose.model("bookmark", userSchema);

module.exports = bookmark;