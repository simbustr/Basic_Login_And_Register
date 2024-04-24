const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const customerRoute = require("./routes/customer");
const authRoute = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

//routes

app.use("/customer", customerRoute);
app.use('/auth', authRoute);


//port
const port = 1100;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/login-app")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
