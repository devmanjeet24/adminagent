const mongoose = require("mongoose");
const { type } = require("os");


const taskSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },  

    Phone : {
        type: String,
        required: true
    },

    notes : {
        type : string,
        required : true,
        agentId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Agent"
        }
    }
})

module.exports = mongoose.model("Task", taskSchema);