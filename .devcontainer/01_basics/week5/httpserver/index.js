import express from "express"
const app = express();

function extractQueryParameters(req, res, next) {
    // this middleware extracts and validates the query parameters

    let a = Number(req.query.a);
    let b = Number(req.query.b);

    if(isNaN(a) || isNaN(b)) {
        res.status(404).json({
            msg: "Bad query"
        })
    }

    req.a = a;
    req.b = b;

    // You can avoid this repetition by creating a middleware that parses the query parameters a and b once, 
    // and attaches them to req so they’re accessible in all routes.

    next();
}

app.use(extractQueryParameters);

app.get('/multiply', (req, res) => {
    let a = req.a;
    let b = req.b;

    let ans = a*b;
    res.json({
        operation: "multiply",
        ans
    })
})

app.get('/add', (req, res) => {
    let a = req.a;
    let b = req.b;

    let ans = a+b;
    res.json({
        operation: "add",
        ans
    })
})

app.get('/divide', (req, res) => {
    let a = req.a;
    let b = req.b;

    let ans = a/b;
    res.json({
        operation: "divide",
        ans
    })
})

app.get('/subtract', (req, res) => {
    let a = req.a;
    let b = req.b;

    let ans = a-b;
    res.json({
        operation: "subtract",
        ans
    })
})

app.listen(3000);




// --------------------------------------------------------------------------------------------------------