// defines user module in this file 

const mongoose = require ("mongoose");
// how to create a model 
// step 2 : require mongooose schema 
// step 3 : create a model 
 const user = new mongoose.Schema({
    Firstname : {
        type : String, 
        required : true 
    
    }, 
    lastname : { 
         type : String, 
        required : false  
    },
    email : { 
         type : String, 
        required : true 
    
    },
    username :{
         type : String, 
        required : true 
    
    },
    likedsongs :{
         type : String, 
     default : "",  

    },
    likedplaylists : {
         type : String, 
        default : "",
    },
    subscribedArtists : {
         type : String, 
        default : "",
    },
 })

 const userModel = mongoose.model("User",user);
  module.exports = userModel ;