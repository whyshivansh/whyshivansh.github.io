import express from "express";
const app = express();
app.listen(process.argv[2] || 8080, () => {
  console.log("Server started");
});