// create a middleware where we log each request's Timestamp, request method, and url

import express, { response } from "express"

const app = express();
function addMiddleware(req, res, next) {
    req.a = Number(req.query.a);
    req.b = Number(req.query.b);
    next();  // if we dont call next then, the request will be hung
}
function metaData(req, res, next) {
    console.log(req.method);
    let hostname = req.hostname;
    let url = req.url;
    console.log(`${hostname}:3002${url}`);
    let date = new Date(); // we place the date object here so that the time gets changed
    console.log(date.toISOString());
    console.log("");
    next();
}
// getting the status code is quite difficult as it cannot be retrieved before giving out the response
function statusCodeMiddleware(req, res, next) {
    console.log();
    next();
}
app.use(addMiddleware, metaData, statusCodeMiddleware);
app.get('/add', (req, res) => {
    let a = req.a;
    let b = req.b;
    let ans = a + b;
    res.json({
        ans
    })
})
app.listen(3002);