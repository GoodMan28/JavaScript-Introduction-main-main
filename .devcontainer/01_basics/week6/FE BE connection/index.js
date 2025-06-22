import express, { application } from "express"
import jwt from "jsonwebtoken"
import cors from "cors"
let JWT_SECRET = "I_LOVE_TASHI_ADAH_LUCY_WAMIQA"
let app = express();
let users = []; // users array
app.use(cors());
app.use(express.json()); // middleware to the parse the body
app.post("/signup", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password) {
        return res.status(401).json({
            "msg": "Enter valid data"
        })
    }
    // checking if the username is already in the users array or not
    let user = null;
    user = users.find(u => {
        if(u.username === username) return true;
        return false;
    })
    if(user) {
        res.status(402).json({
            "msg": "Email already registered"
        })
    }
    else {
        users.push({
            "username": username,
            "password": password
        })
        res.status(200).json({
            "msg": "The user is signed up",
            username
        })
    }

    console.log(users);
    console.log();
})

app.post("/signin", (req, res) => {
    // checking of the username and the password of the user is matching or not
    let username = req.body.username;
    let password = req.body.password;
    if(!username || !password) {
        // we will return the response because we dont want other json response to be given
        return res.status(401).json({
            "msg": "Enter valid data"
        })
    }
    let user = null; // whichever object is assigned to the user variable, the change in that varible will be reflected in the original array because the user is the reference
    user = users.find(u => {
        if(u.username === username && u.password === password) return true;
        return false;
    })
    let token = null;
    if(user) {
        token = jwt.sign({
            username: username
        }, JWT_SECRET);
        user["token"] = token;
        res.json({
            "msg": "The user is signed in",
            username,
            token
        })  
    }
    else {
        res.status(402).json({
            "msg": "Wrong credentials"
        })
    }
    console.log(users);
    console.log();
})

function auth(req, res, next) {
    let token = req.headers.authorization;
    if(token) {
        // middleware that will be used by the /me EP
        try {
            let decodedPayload = jwt.verify(token, JWT_SECRET);
            req.decodedPayload = decodedPayload;
            next();
        }
        catch(err) {
            return res.status(401).json({ msg: "Token verification failed", error: err.message });
        }
    }
    else {
        res.status(402).json({
            "msg": "Provide the token: authorization header empty"
        })
    }
}

app.get("/me", auth, (req, res) => {
    // this end point does need to worry about the authentication logic
    let decodedPayload = req.decodedPayload;
    return res.json({
        "msg": "The user is found",
        "username": decodedPayload.username
    })
})

app.listen(3002);

// ==========================================================================================================================
// Theory: We needed jwt, so that we can get the username with the help of the jwt without checking the DB for the same
// so in the auth middleware, we just verified the token in the try-catch block and just and if no error is there, 
// then we will pass the payload to the next(). So that the EP can easily get the "username" with the help of the payload