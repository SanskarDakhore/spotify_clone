const jwt = require("jsonwebtoken");
exports={}
exports.getToken= async()=>{
// assume this code is complete. 
const token = Jwt.sign({identifier : userModel._id});
return token ; 
};
module.exports=exports