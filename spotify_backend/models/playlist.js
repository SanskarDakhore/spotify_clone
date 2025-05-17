// defines user module in this file 

const mongoose = require ("mongoose");
// how to create a model 
// step 2 : require mongooose schema 
// step 3 : create a model 
 const playlist = new mongoose.Schema({
    name : {
        type : String, 
        required : true, 
    
    }, 
    Thumbnail : { 
         type : String, 
        required : true,  
    },
     Owner : { 
         type : String, 
        required : true 
    
    },
    // 1. playlist having songs.
    // 2. playlist collaborators.
     songs : [
        {
            type : mongoose.Types.ObjectId,
            ref : "song",
        }
     ],
     collaborators : [
        {
            type : mongoose.Types.ObjectId,
            ref : "user",
        }
     ],
 })

 const playlistModel = mongoose.model("playlist",playlist);
  module.exports = playlistModel