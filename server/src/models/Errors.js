const USER_EXISTS = "Usuario o email ya existe";
const INVALID_PASSWORD = "Contraseña incorrecta";
const INVALID_PASSWORD_CONFIRMATION = "Las contraseñas no coinciden";
const USER_DOESNT_EXISTS = "Usuario no existe";
const INVALID_TOKEN = "Token expirado";
const EMAIL_TEMPLATE_NOTFOUND = "Email template not found";
const EMAIL_VERIFY_TEMPLATE_ERROR =
  "Couldn't generate email verification email.";

module.exports = {
  USER_EXISTS,
  INVALID_PASSWORD,
  USER_DOESNT_EXISTS,
  INVALID_TOKEN,
  EMAIL_TEMPLATE_NOTFOUND,
  EMAIL_VERIFY_TEMPLATE_ERROR,
  INVALID_PASSWORD_CONFIRMATION
};
