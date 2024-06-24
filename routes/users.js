const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

// Connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/authentication");

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  secret:String
});

// Apply the passport-local-mongoose plugin to the schema
UserSchema.plugin(plm);

// Create and export the user model
module.exports = mongoose.model('User', UserSchema);
