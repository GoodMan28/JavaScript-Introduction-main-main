import express from "express"

const app = express()

// boolean function that returns true when the age of the person is more than 14
function isOldEnough(age) {
    return age > 14;
}

// This was the first way to validate the age without the use of middlewares 
// but the major drawback is that we need to implement each validation checks for individual rides. This is not reusable code.

// also if we want to implement a series of checks, then using series of middleware functions will help in using the codes

function isOldEnoughMiddleware(req, res, next) {
    // this is a middleware fn hence it has the access to the mentioned objects (mentioned in the description)
    let age = Number(req.query.age);
    if(age > 14) {
        next(); // propagate to the next middleware fuinction
    }
    else {
        // by this we have ended the req-res cycle
        res.status(411).json({
            msg: "You are not old enough"
        }) 
    }
}

// reusing the middleware code and 
// now the ride code does not need to check seperately and they simply have to include the middleware code. And the ride functions only have to implement the ride code
// in the CRUD methods

// ----------------------------------------------------------------------------------------------------------
// or we can use is
// app.use(isOldEnoughMiddleware); // the methods below this will use the middleware fucntions
// if we write the use method in the bottom then no method will use them
// ----------------------------------------------------------------------------------------------------------

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully rode a ride 1"
    })
})

app.get('/ride2', isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully rode a ride 2"
    })
})

app.listen(3000);