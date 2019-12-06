class SignInResponse {
  constructor({ token }) {
    this.token = token;
  }
}

class SignUpResponse {
  constructor({
    token,
    refreshToken,
    expiresIn,
    email,
    id,
    message,
    role,
    full_name
  }) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.email = email;
    this.id = id;
    this.message = message;
    this.role = role;
    this.full_name = full_name;
  }
}

module.exports = {
  SignInResponse,
  SignUpResponse
};
