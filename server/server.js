const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const UserModel = require("./models/UserModel");
const PostModel = require("./models/PostModel");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose
  .connect("mongodb+srv://tickle:tickle123@cluster0.irxj5yg.mongodb.net/blog")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json("The token is missing");
    } else {
      const decoded = await jwt.verify(token, "thesecretkey");
      req.email = decoded.email;
      req.username = decoded.username;
      next();
    }
  } catch (error) {
    return res.json("Error verifying token");
  }
};


app.get("/", verifyUser, (req, res) => {
  return res.json({ email: req.email, username: req.username });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    UserModel.create({ username, email, password: hash })
      .then((user) => res.json("Success"))
      .catch((err) => res.json(err));
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, username: user.username },
            "thesecretkey",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json("Success");
        } else {
          return res.json("Password is incorrect");
        }
      });
    } else {
      res.json("User doesnt exist");
    }
  });
});

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'Public/Images')
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const uplaod = multer({
    storage: storage
})

app.post('/create',verifyUser ,uplaod.single('file'),(req,res)=>{
    try {
        const { title, description }=req.body;
        const  { file } = req.file.file;
        PostModel.create({title , description , file})
        .then((posts) => res.json(posts))
        .catch(err=> res.json(err))
    } catch (error) {
        console.error("Error in multer middleware:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json("Success");
});

app.listen(4001, () => {
  console.log("running on port 4001");
});
