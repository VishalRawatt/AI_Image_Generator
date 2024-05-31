const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PostRouter = require('./routes/Posts');
const app = express();
const mongoDB = process.env.MONGODB_URL || "mongodb+srv://Vishal:vishal@vishalrawat.m0jxh57.mongodb.net/";

mongoose.connect(mongoDB)
.then(() => {
    console.log("Database connection established")
})
.catch((e) => { 
    console.log(e) 
});

app.use(cors());
app.use(express.json());
app.use("/api/post", PostRouter);

app.listen(8080, () =>{
    console.log("Server is running on port 8080")
})