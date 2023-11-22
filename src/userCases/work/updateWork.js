const Work = require("../../entities/work/wokrss");

// nas linhas de baixo que é *UPDATE* vai atualizar  o trabalho
async function updateWork(req, res) {
  try {
    const { name, data } = req.body;

    const updatedWorks = await Work.findOneAndUpdate({
      name: name,
      data: data,
    });

    res.send(updatedWorks);
  } catch (error) {
    res.status(400);
    res.send({ mensage: "erro no bano de dado" });
  }
}

module.exports = updateWork;
