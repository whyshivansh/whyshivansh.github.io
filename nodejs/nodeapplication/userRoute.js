import express from "express"
const userRouter = express.Router()
userRouter.get("/show",(req,res)=>{
    res.send("Show Users");
})

userRouter.get("/api/users/register",(req,res)=>{
    res.send("Register Users");
})

userRouter.get("/api/users/login",(req,res)=>{
    res.send("Login Users");
})

export default userRouter