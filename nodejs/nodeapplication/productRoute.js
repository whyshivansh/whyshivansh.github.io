import express from "express"
const productRouter = express.Router()

app.get("/api/products/show",(req,res)=>{
    res.send("Show Products");
})

app.delete("/api/products/1",(req,res)=>{
    res.send("Delete Products");
})

export default productRouter