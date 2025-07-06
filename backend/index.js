/* global process */
import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import data from "./models/mesage.model.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

// Serve frontend static files
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle SPA routing, serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Simple CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173")
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  if (req.method === "OPTIONS") {
    return res.sendStatus(200)
  }
  next()
})


app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch(err=>{
    console.log(err)
})

// app.get("/", (req, res) =>{
//     res.send("Hello world");
// })
app.post("/send-message",(req,res)=>{
    const {name,subject,email,message} = req.body;
    const newMessage = new data({
        name,
        subject,
        email,
        message
    });
    newMessage.save().then(()=>{
        res.status(200).json("message sent successfully")
    }).catch(error=>{
        console.log(error)
        res.status(500).json("Internal server error ")
    })
})



app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
})