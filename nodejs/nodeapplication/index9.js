import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET = "sometext";
app.listen(8080, () => {
  console.log("Server started");
});
const users = [
  {
    name: "John",
    email: "john@email.com",
    password: "1234",
    role: "user",
  },
  {
    name: "Cathy",
    email: "cathy@email.com",
    password: "1234",
    role: "admin",
  },
];
app.use(express.json());
const authenticate = (req,res,next)=>{
  const token = req.headers.authorization
  res.json({message:"Access Denied"});

}

const authorize = (role) => {
  return (req,res,next) => {
                                                                     
  }
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    const token = jwt.sign(found, SECRET);
    res.status(200).json({ user: found, token });
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});

app.get("/users",(req,res)=>{
  res.json(users)
});