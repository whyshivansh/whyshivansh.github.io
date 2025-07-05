import express from 'express'
import userRouter from './userRoute'
import productRouter from './productRoute'
const app = express()

app.listen(8080,()=>{
    console.log("Server Started")
})

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)