import express from "express"

const app = express()
const app1 = express()
function sum(n) {
    let ans = (n*(n+1))/2;
    return ans;
}
app.get('/', function (req, res) {
    let n = Number(req.query.n);        // pass the arg as this http://localhost:3001/?n=4
    let ans = sum(n);
    if(isNaN(ans)) {
        res.status(400).send(`Invalid number sent in the argument   3000`);
        console.log("Invalid option sent in the arg: " + ans + "   3000");
    }
    else {
        res.send(`The ans is ${ans}   3000`);
        console.log("Ans sent in the parameter: " + ans + "   3000");    
    }
})
app.listen(3000);

app1.get('/', function (req, res) {
    let n = Number(req.query.n);
    let ans = sum(n);
    if(isNaN(ans)) {
        res.status(400).send(`Invalid number sent in the argument   3001`);
        console.log("Invalid option sent in the arg: " + ans + "   3001");
    }
    else {
        res.send(`The ans is ${ans}   3001`);
        console.log("Ans sent in the parameter: " + ans + "   3001");    
    }
})
app1.listen(3001)