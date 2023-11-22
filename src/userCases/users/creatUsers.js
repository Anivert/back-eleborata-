const User = require("../../entities/userss/Userss");
// nas linhas de baixo que é *POST* vai cadastrar  o usuario
async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(201);
    res.send({ user: newUser });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = createUser;
