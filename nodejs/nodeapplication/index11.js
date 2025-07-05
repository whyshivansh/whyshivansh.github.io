import express from "express";
const app = express();
const port = process.argv[2] || 8080
app.listen(port, () => {
console.log(`Server started on ${port}`);
});