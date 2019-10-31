const userPasswordRegex = "^(?=.{6,})";

const validatePostLogin = {
  body: {
    type: "object",
    properties: {
      username: { type: "string" },
      password: {
        type: "string",
        format: "regex",
        pattern: userPasswordRegex
      }
    },
    required: ["username", "password"]
  }
};

const validatePostSignup = {
  body: {
    type: "object",
    properties: {
      email: { type: "string", format: "email" },
      password: {
        type: "string",
        format: "regex",
        pattern: userPasswordRegex,
        minLength: 6,
        maxLength: 20
      }
    },
    required: ["email", "password"]
  }
};

module.exports = {
  validatePostLogin,
  validatePostSignup
};
