// nas linhas de baixo que é *PUT* vai atualizaar tdo os usuario

const User = require("../../entities/userss/Userss");

async function updateUser(req, res) {
  try {
    const { name, data, email } = req.body;

    const updatedUser = await User.findOneAndUpdate({
      name: name,
      data: data,
      email: email,
    });

    res.send(updatedUser);
  } catch (error) {
    res.status(400);
    res.send({ mensage: "erro no bano de dado" });
  }
}

module.exports = updateUser;
