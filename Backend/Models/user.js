import Mongoose from "mongoose";


const UserSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },
    
    password : {
        type : String,
        required : true,
    },

    role : {
        type : String,
        enum : ["admin", "user"],
        default : "admin",
    },
})

    
module.exports = Mongoose.model("user", UserSchema);