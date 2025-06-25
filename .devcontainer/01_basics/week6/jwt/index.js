import express from "express"
import jwt from "jsonwebtoken"
let app = express();
let JWT_SECRET = "ABHINEET_LOVES_ADAH_WAMIQA"
let users = []; // in memory variable that will store the username, password, and token(which will be generated after the sign-in so that the user can access all the contents)
app.use(express.json()); // for parsing the body


app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // here we can impose strict checks on the username and the password
    // now inserting the username and the password in the users array
    let user = null;
    user = users.find((u) => {
        if(u.username === username) return true;
        else return false;
    })
    if(user) {
        res.json({
            message: "The email is already registered"
        })
    }
    else {
        users.push({
            username: username,
            password: password
        });
        res.json({
            message: "The user is signed up",
            username
        });
    }

    

    console.log(users);
    console.log("");
})

app.post('/signin', (req, res) => {
    // here we will be checking whether the username and the password is present or not
    // if the user is signed up, then returning him the token and inserting it into the array
    let username = req.body.username;
    let password = req.body.password;
    // just like maps and filters we will use the find function
    let user = null;
    user = users.find((u) => {
        // this is the finding logic
        if(u.username === username && u.password === password) return true;
        else return false;
    })
    let token = null;
    if(user) {
        // if the user is found
        token = jwt.sign({
            username: username
        }, JWT_SECRET);

        // updating the users array and adding the token there
        user[token] = token;

        res.json({
            username,
            password,
            token
        })
    }
    else {
        res.json({
            message: "Wrong credentials"
        })
    }

    console.log(users);
    console.log("");
})

// Let’s create an endpoint (/me ) that returns the user their information `only if they send their token
app.get('/me', (req, res) => {
    let token = req.headers.authorization;
    // Decoding the username with the help of the JWT Token. Now onwards we dont need to store the JWT anymore on the DB. We can directly get the username from it
    let decoded = jwt.verify(token, JWT_SECRET); // This will return us an object containing the username
    let decodedUsername = decoded.username;

    // finding the username in the users array
    let user = null;
    user = users.find((u) => {
        if(u.username === decodedUsername) return true;
        else return false;
    })

    if(user) {
        res.json({
            message: "user found",
            username: user.username,
            password: user.password,
            token
        })
    }
    else {
        res.status(404).json({
            message: "no such user"
        })
    }
})
app.get('/decode', (req, res) => {
    let token = req.body.token;
    let [header, payload, signature] = token.split('.');

    // recomputing the signature with the help of the header, payload and the secret. If that matches with the signature in the token then it is verified else not
    let data = `${header}.${payload}`;
    let recomputedSign = HMAC_SHA256(data, JWT_SECRET);

    if(recomputedSign == signature) {
        res.json({
            msg: "the token is correct",
            username: jwt.verify(token, JWT_SECRET).username
        })
    }
    else {
        res.status(404).json({
            msg: "Wrong token"
        })
    }
})
app.listen(3002);
