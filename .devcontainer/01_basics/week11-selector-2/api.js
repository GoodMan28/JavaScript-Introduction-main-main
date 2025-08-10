import express from "express"
import cors from "cors"
let app = express();
let network = 7;
let jobs = 4;
let messaging = 7;
let notifications = 5;
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        network,
        jobs,
        messaging,
        notifications
    })
})

app.listen(3000)