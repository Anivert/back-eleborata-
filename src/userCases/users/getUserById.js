//essa function pegou todos usuarios peo id
const User = require("../../entities/userss/Userss");

async function getUserById(req, res) {
  try {
    const userSelected = await User.findById(req.params.id);
    res.status(200);
    res.send(userSelected);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getUserById;
