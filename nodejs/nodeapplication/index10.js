// const stName1 = process.argv[2] || "John"
// const stName2 = process.argv[3] || "John"
// console.log(`Hello ${stName1} and ${stName2}`)

import express from "express";
const app = express();
const PORT = process.argv[2] || 8080
app.listen(PORT, () => {
console.log(`Server started on ${PORT}`);
});