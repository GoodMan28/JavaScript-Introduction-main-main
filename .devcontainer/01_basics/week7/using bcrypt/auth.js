import express from "express"
import jwt from "jsonwebtoken"
let JWT_SECRET = "s3cret"
export function auth(req, res, next) {
    let token = req.headers.token;
    if(token) {
        try {
            let decodedPayload = jwt.verify(token, JWT_SECRET);
            let userId = decodedPayload.id;
            req.userId = userId; // we will send this user Id which is associated to the user via a token
            next();
        }
        catch(err) {
            res.status(403).json(err)
        }
    }
    else {
        res.status(402).json({
            "msg": "User not logged in/ Provide token"
        })
    }
}