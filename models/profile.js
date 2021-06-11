const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  githubusername: {
    type: String,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema, "profile");
