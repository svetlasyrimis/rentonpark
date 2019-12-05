class SignInResponse {
  constructor({ token }) {
    this.token = token;
  }
}

class SignUpResponse {
  constructor({ token, refreshToken, expiresIn, email, id, message, role }) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.email = email;
    this.id = id;
    this.message = message;
    this.role = role;
  }
}

module.exports = {
  SignInResponse,
  SignUpResponse
};
