const express=require("express")
const connect = require("./config/db");
const router = require("./routes/user-route");
const localization = require("./middleware/localauth");
const passport = require("passport");
const session=require("express-session");

const app=express()

app.use(session({secret:"secrete"}))
localization(passport)
app.use(passport.initialize());
app.use(passport.session())

app.use(express.json());



app.use(express.urlencoded({extended:true}))

app.use(router)

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");


app.listen(8080,()=>{
  console.log("express connected");
  connect();
})