import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors"
import { db, User } from "@repo/db/db";


configDotenv();




const app=express();
app.use(express.json())
app.use(cors());


app.get("/", (req, res)=>{
    res.send("hii from server")
})


app.post("/user",async(req,res)=>{
    const {name, age, email}=req.body;

    const user=await User.create({
        name, 
        age, 
        email
    })

    return res.status(200).json({
        message : "user is created successfully"
    })
})

app.get("/users",async(req,res)=>{


    const users=await User.find()

    return res.status(200).json({
        users: users
    })
})

db();
app.listen(process.env.PORT, ()=>{
    console.log("the app is listening on port :", process.env.PORT)
})
