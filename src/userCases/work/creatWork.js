// nas linhas de baixo que é *POST* vai cadastrar  u trabalho
// function creatWork(req, res) {
//   try {
//     res.send({ message: "Trabalho cadastrado com sucesso" });
//   } catch (error) {
//     res.status(400);
//     res.send({ message: " erro no banco de ddo" });
//   }
// }

const Work = require("../../entities/work/workss");

async function createWok(req, res) {
  try {
    const { name, data } = req.body;
    const newWork = await Work.create({
      name: name,
      data: data,
    });

    res.status(201);
    res.send({ work: newWork });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = createWok;
