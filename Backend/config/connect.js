const mongoose = require("mongoose");

const connectDB = async () => {
    try {

       await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Database connected"))
        
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
}

module.exports = connectDB;