const boom = require("boom");
const User = require("../models/User");
const { SignUpResponse } = require("../models/Auth");
const {
  INVALID_PASSWORD,
  USER_DOESNT_EXISTS,
  USER_EXISTS,
  INVALID_PASSWORD_CONFIRMATION
} = require("../models/Errors");

exports.postSignup = async (req, res) => {
  const {
    email,
    password,
    name,
    lastname,
    sex,
    phone_prefix,
    phone,
    username
  } = req.body;
  const confirm_password = req.body.password_confirmation;
  try {
    const existingEmail = await User.findOne({ email: req.body.email });
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingEmail || existingUser) {
      res.code(409);
      res.send(new Error(USER_EXISTS));
      return;
    } else if (!(confirm_password === password)) {
      res.code(409);
      res.send(new Error(INVALID_PASSWORD_CONFIRMATION));
      return;
    }
    const user = new User({
      email,
      password,
      name,
      lastname,
      sex,
      phone_prefix,
      phone,
      username
    });
    const newUser = await user.save();
    const { id, email: userEmail } = newUser;
    const token = await res.jwtSign({ id }, { expiresIn: "180" });
    res.send(new SignUpResponse({ email: userEmail, token, id }));
  } catch (error) {
    res.send(error);
  }
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      username: username.toLowerCase()
    }).exec();
    if (!user) {
      res.send(new Error(USER_DOESNT_EXISTS));
    }
    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      const { id } = user;
      const token = await res.jwtSign({ id }, { expiresIn: "180" });
      return res.send(new SignUpResponse({ username, token, id }));
    }
    return res.send(new Error(INVALID_PASSWORD));
  } catch (err) {
    throw err;
  }
};
