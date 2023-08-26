const User = require("../model/user-schema")

const nav=(req,res)=>{
  res.render("nav")
}
const product=(req,res)=>{
  res.render("product")
}
const getproduct=(req,res)=>{
  res.send("product")
}
const getlogin=(req,res)=>{
  User.authenticate("local", {
          successRedirect: "/home",
          failureRedirect: "/login",
        }),
        async (req, res) => {
          res.send("done");
        }
}
const login=(req,res)=>{
  res.render("login")
}
const signup=async(req,res)=>{
  console.log(req.body);
  await User.create(req.body)
  res.send("done")
}
const getsignup=(req,res)=>{
  res.render("signup")
}
const index = (req, res) => {
  res.render("index");
};
module.exports={nav,login,signup,getsignup,index,getlogin,product,getproduct}