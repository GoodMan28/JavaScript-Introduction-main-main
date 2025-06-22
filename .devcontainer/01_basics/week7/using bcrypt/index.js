import {UserModel, TodoModel} from "./db.js"
import bcrypt from "bcrypt"
import express from "express"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod"
import cors from "cors"
import {auth} from "./auth.js"
const app = express();
let JWT_SECRET = "s3cret";
// making connection with the DB using the url present in the compass
await mongoose.connect('mongodb+srv://admin:Abhineet%4028@cluster0.qxzy1e7.mongodb.net/todo-app-database');
/*
Abhineet@28 is your password — but @ in a URL is treated as a special character, meaning Mongo thinks 28@cluster0... is the hostname, which leads to: error
Sol. Encode @ → %40
*/
app.use(express.json());
app.use(cors());
app.post("/signup", async (req, res) => {
    // defining the schema of the body on which it should be based
    let requiredBody = z.object({
        username: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(100)
    })
    const parsedWithSuccess = requiredBody.safeParse(req.body);
    /*
    the above safeParse returns :
    {
        success: true/ false,
        data: output,
        error: message about the error
    }
    */
    if(!parsedWithSuccess.success){
        return res.status(402).json({
            "msg": "Incorrect input format",
            "error": parsedWithSuccess.error
        })
    }
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    // putting the hashing process into the try block because it may fail so our system should not crash
    let saltRounds = 5;
    let hash = await bcrypt.hash(password, saltRounds)
    try{
        await UserModel.create({
            username: username,
            hashed_password: hash,
            name: name
        })
        return res.json({
            "msg": "The user is signed up"
        })
    }
    catch(err) {
        return res.status(409).json({
            "msg": err.message
        })
    }
});

app.post("/signin", async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // findOne function either returns the user or undefined
    let user = await UserModel.findOne({
        username: username
    })
    if(!user) {
        return res.status(403).json({
            "msg": "Not regitered! Register first"
        })
    }
    // now we will check the result after de-hashing the password

    let result = await bcrypt.compare(password, user.hashed_password);
    if(result) {
        let token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET);

        return res.json({
            token
        })
    }
    else {
        res.status(405).json({
            "msg": "Wrong credentials"
        })
    }
});

app.post("/todo", auth, async (req, res) => {
    let todo = req.body.description;
    let userId = req.userId;
    await TodoModel.create({
        description: todo,
        done: false,
        userId: userId
    })
    res.json({
        "msg": "Todo is added"
    })
}); // both EP are authenticated i.e. when the user is logged in then he will be able to do these

app.get("/todos", auth, async (req, res) => {
    let userId = req.userId;
    // getting the list of todos having the userId
    let todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        "msg": "To todos corresponding to this userId",
        "todos": todos
    })
});

app.get("/me", auth, async (req, res) => {
    let userId = req.userId;
    // now we will find this into the UserModel
    let user = await UserModel.findOne({
        _id: userId
    })
    if(user) {
        res.json({
            "msg": "user found",
            "username": user.username,
            "name": user.name
        })
    }
    else {
        res.status(404).json({
            "msg": "No user"
        })
    }
}) 

app.listen(3002);
