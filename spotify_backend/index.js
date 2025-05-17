// Install Express.js via npm using: npm install express

// Importing express
const express = require("express");
const app = express();
require("dotenv").config();
const port = 3080;
const user = require ("./models/user");
const passport=require("passport")
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
// console.log ("proccess.env");

// connect mongodb to node app
// mongoose .connect() takes 2 arguements : 1. which db to connect , 2. connection type 
console.log("MONGO_PASSWORD:", process.env.MONGO_PASSWORD);

mongoose.connect ("mongodb+srv://dakhoresanskar09:" + process.env.MONGO_PASSWORD +"@spotifydb.cyze2qn.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyDB")
.then ((x)=>{
    console.log("connected to mongo Database ! : Database Name :Spotify_db ")
})
.catch((err)=>{
    console.log("Error while loading/connecting", err);
});

// setup passport-jwt

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_PASSWORD;
passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
       // done (error,does user exits ? )

        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// API: GET / => return text "Hello Noob"
app.get("/", (req, res) => {
    // req contains all request data
    // res is used to send a response
    res.send("Hello Nb");
});

// Start the server on port 3080
app.listen(port, () => {
    console.log(`Server is running at  `+ port);
});

