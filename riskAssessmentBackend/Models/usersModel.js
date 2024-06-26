const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
}, {timestamps:true}
)

const userModel = mongoose.model('users',userSchema)
module.exports=userModel;