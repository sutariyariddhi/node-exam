const { Router } = require("express");
const User = require("../model/user-schema.js");
const { check } = require("../middleware/user-middleware.js");
const { login,signup, getsignup, index, nav, getlogin } = require("../controllers/user-controller.js");
const passport = require("passport");

let router=Router();
router.get("/home",nav)
router.post("/signup",check,signup)
router.get("/login",login)
router.post("/login",getlogin
  );
router.post("/login")
router.get("/signup",getsignup)
router.get("/index",index)
module.exports=router