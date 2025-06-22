import express from "express"
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors()); // this will allow the request from cross origins also to this server
app.post('/add', (req, res) => {
    // Or we can do to avoid CORS is to host the Backend and the Frontend on the same domain
    // res.sendFile(__dirname + "./public/index.html"); // in this way
    let a = Number(req.body.a)
    let b = Number(req.body.b)

    let ans = a + b;
    res.json({
        "operation": "add",
        ans
    })
});
app.listen(3002)

// now we will write a html code that hits this api in the background