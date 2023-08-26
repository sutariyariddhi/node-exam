const passport = require("passport");
const newuser = require("../model/user-schema.js");

const LocalStrategy = require("passport-local").Strategy;
const localization = (passport) => {
  passport.use(
    new LocalStrategy(async (name, password, done) => {
      let userdata = await User.findOne({ name: name });
      try {
        if (!userdata) return done(null, false);
        if (userdata.password !== password) return done(null, false);
        return done(null, userdata);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser(async (id,done)=>{
let data = await User.findById(id); 
done(null,data)
})
module.exports=localization