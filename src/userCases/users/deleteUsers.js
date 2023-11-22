//na linha de baixo que é *DELETAR* vai deletar  o usuario

const User = require("../../entities/userss/Userss");

async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send({
      message: "Usario deletedo com successo",
      ideDletado: req.params.id,
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

// async function deleteUser(req, res) {
//   try {
//     const { id } = req.params;
//     const result = await User.destroy({
//       where: {
//         id: id,
//       },
//     });

//     if (result === 1) {
//       res
//         .status(200)
//         .send({ message: "Usario deletedo com successo", idDeletado: id });
//     } else {
//       res.status(404).send({ message: "não encontra o usueior" });
//     }
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// }

module.exports = deleteUser;
