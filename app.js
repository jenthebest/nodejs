// "./profile.js" tells the program that profile is in the same directory as app.js
var profile = require("./profile.js");

var users = process.argv.slice(2);

users.forEach(profile.get);

//Above is same as the below, just different readability
//users.forEach(function(username) {
//	profile.get(username);
//});

