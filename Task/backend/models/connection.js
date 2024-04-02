import mongoose from "mongoose";
const url="mongodb://localhost:27017/JupitechTask";
mongoose.connect(url);
console.log("Successfully connnected with database");