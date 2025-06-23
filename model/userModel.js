// User ka schema define krenege collection ka (tabke type)

import mongoose from "mongoose"

// javascirpt onject jo ki schema define krta hai
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    age: {
        type: Number,
    },

    daddyName: {
        type: String,
    }

})


// first argument => collection ka naam jo ki databse me dikhega (ye tum kuch bhi daal skti ho)
const User = mongoose.model('User', userSchema); //returns class

export default User //taki mai ise dosre files me use kr saku