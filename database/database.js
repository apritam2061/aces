const mongoose = require("mongoose");

async function connectionToDb() {
 await mongoose.connect(
    "mongodb+srv://apritam2061:9845070061@cluster0.3dgewvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database Connected")
}


module.exports= connectionToDb