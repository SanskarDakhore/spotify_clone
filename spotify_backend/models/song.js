// defines user module in this file 

const mongoose = require ("mongoose");
// how to create a model 
// step 2 : require mongooose schema 
// step 3 : create a model 
 const song = new mongoose.Schema({
    name : {
        type : String, 
        required : true, 
    
    }, 
    Thumbnail : { 
         type : String, 
        required : true,  
    },
    track : { 
         type : String, 
        required : true 
    
    },
     artist :{
         type : mongoose.Types.ObjectId, 
         ref: "user",
 
    
    },
 })

 const songModel = mongoose.model("song",song);
  module.exports = songModel 