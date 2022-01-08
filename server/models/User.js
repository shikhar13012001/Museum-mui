const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  liked: {
    type: [String],
    default: [],
  },
});
const ArtifactSocialInfoSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model("user", userSchema);
const ArtifactSocialInfo = mongoose.model(
  "artifactsocialinfo",
  ArtifactSocialInfoSchema
);
module.exports = { User, ArtifactSocialInfo };
