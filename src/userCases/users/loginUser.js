// nas linhas de baixo que é *POST* vai cadastrar  o usuario

// const passport = require("passport");
// const LocalStrategy = require("passport-local");
function loginUser(req, res) {
  try {
    res.send({ message: "Logado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = loginUser;
