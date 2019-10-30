const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    format: "email"
  },
  password: String,
  username: String,
  name: String,
  lastname: String,
  sex: {
    type: String,
    enum: ["Hombre", "Mujer"]
  },
  phone_prefix: String,
  phone: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

userSchema.set("timestamps", true);

userSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(
  candidatePassword
) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        reject(err);
      }
      resolve(isMatch);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
