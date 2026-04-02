import express from "express";
const router = express.Router();
const app = express();

app.get("/",  (req, res) => {
    res.status(200).json({
        "success": true,
        "msg": "route is running"
    });
    return;
})
app.post("/api/v1/create", )

app.listen(3000);