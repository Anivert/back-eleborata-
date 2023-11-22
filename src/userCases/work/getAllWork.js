const Work = require("../../entities/work/wokrss");

async function getAllWork(req, res) {
  try {
    const works = await Work.find({});
    res.status(200);
    res.send(works);
  } catch (error) {
    res.status(400);
    res.send({ mensage: "erro no bano de dado" });
  }
}

module.exports = getAllWork;
