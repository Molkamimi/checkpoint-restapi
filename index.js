//1 require express
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
//2 instance des methodes express
const app = express();
//3 creation de serveur
//connect DB

dbConnect();

//create route
//middleware sur body parser qui est devenu inclus dans express(car lorsqu'on a mis clg req.body puis send , il a renvoyé sur postman undefined)
app.use(express.json());
app.use("/api/contact", require("./routes/contacts"));
//app.use("/api/contact", require("./routes/contacts"));
//pafois le port paraît réservé
const Port = process.env.PORT;
console.log(Port)
app.listen(Port, (err) => {
  err ? console.error(err) : console.log("server is running");
});
