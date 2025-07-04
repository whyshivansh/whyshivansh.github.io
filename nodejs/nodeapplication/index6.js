import express from "express";
const app = express();
app.listen(8080);
app.use(express.json());
let users = [];

const auth = (req,res,next)=>{
    if(req.headers.authorization){
        next();
    }
}