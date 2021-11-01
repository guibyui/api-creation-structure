const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postsRoute = require("./routes/posts");
const getsRoute = require("./routes/gets");

app.use("/posts", postsRoute);
app.use("/get", getsRoute);
// app.use("/user", userRoute)

// mongoose.connect(process.env.DB_CONNECTION),
//   () => {
//     console.log("DB Connected!");
//   };

app.listen(4040);
