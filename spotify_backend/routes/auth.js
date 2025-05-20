const express = require ("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const {getToken} =require("../utils/helpers");
//this post will help users to register a user
router.post("/register",async(req,res) => {
    // this code will run when /register  api is called 
    // my req body will be of the format {email,password,firstname,lastname,username}   
     const {email,password,firstname,lastname,username}=req.body;
     // step 2. does user already exist 
     const user = user.findOne({email : email});
     if (user){
        return res
        .status(403)
        .json({error:"A user with email alredy exists"})
     }
    //  this is a valid request 
    // step 3. create a new user in the db 
    //  step 3.1 . we don't store pass in plain text
    // we convert plain text to hash.
     const hashedPassword = bcrypt.hash(password,256);
     const newUserData={email,password : hashedPassword,firstname,lastname,username};
     const newUser=await user.create(NewUserData);
    // step 4 . we want to create the token to retrun to user
     const token = await getToken(email,newUser);
    //step 5. Return the result to the user
     const userToReturn={...newUser.toJSON(),token};
     delete userToReturn.password;
     return res.status(200).json(userToReturn);
});
module.exports = router;    