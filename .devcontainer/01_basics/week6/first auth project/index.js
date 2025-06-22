import express from "express"

let app = express();

let users = []; // in memory variable that will store the username, password, and token(which will be generated after the sign-in so that the user can access all the contents)
app.use(express.json()); // for parsing the body

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TOKEN GENERATION LOGIC
const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const numbers = '1234567890';
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
const options = [...lowercase, ...uppercase, ...numbers, ...specialChars];
// console.log(tokenArray);
// console.log(tokenArray.length);

function generateToken() { 
    let token = "";
    for(let i = 0; i < 32; i++) {
        token = token + options[Math.floor(Math.random() * options.length)];  // [0 -> 1) => [0 -> 91] (after floor was performed)
    }
    return token;
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let user = null;
    // finding the user whether he is already signed up or not
    user = users.find(u => {
        if(u.username === username) return true;
        else return false;
    })
    if(user) {
        res.status().json({
            msg: "user already signed up"
        })
    }
    else {
        users.push({
            "username": username,
            "password": password
        })
        res.json({
            "msg": "The user is signed up"
        })
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
        token = generateToken();
        user["token"] = token; // inserting the token into the object
        res.json({
            message: "The user is signed in",
            username,
            token
        })
    }
    else {
        res.status(404).json({
            message: "Wrong credentials"
        })
    }

    console.log(users);
    console.log("");
})

// Let’s create an endpoint (/me ) that returns the user their information `only if they send their token
app.get('/me', (req, res) => {
    let token = req.headers.authorization;
    // finding the token in the users array
    let user = null;
    user = users.find((u) => {
        if(u.token === token) return true;
        else return false;
    })

    if(user) {
        res.json({
            message: "user found",
            username: user.username
        })
    }
    else {
        res.status(404).json({
            message: "no such user"
        })
    }
})
app.listen(3002);