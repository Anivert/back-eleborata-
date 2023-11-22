const Work = require("../../entities/work/wokrss");

//// nas linhas de baixo que é *GETE* vai pegar  o trabalho peo id
async function getWorkById(req, res) {
  try {
    const workSelected = await Work.findById(req.params.id);
    res.status(200);
    res.send(workSelected);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getWorkById;
