import express from "express"

const app = express();

// Here we will try to make an http server where we will provide the data with the help of body

// Now when we will try to hit this endpoint then, we will get an  error that "we are finding the properties of undefined"
// this is because we are not using the json object of the express library which is same as body-parser

// here comes our first kind of middleware
app.use(express.json()); // now this middleware will be used by all of the routes since it will parse the JSON to the JS object
// the reason why we are using the express.json() as the function because :
// express is an object which contains the key known as "json" which has the value as function which in turn returns a function with (req, res, next) as arg
// hence we call the function of "json" key hence we get the innermost function.

// More info in the SS attached (expressMiddleware.png)
app.post('/add', (req, res) => {
    let a = Number(req.body.a);
    let b = Number(req.body.b);

    let ans = a + b;
    res.json({
        "operation": "add",
        ans
    });
})

app.listen(3002)