const Post = require("../../entities/post/Postss");

async function deletePosta(req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send({
      message: "Post deleta com sucesso",
      ideDeletado: req.params.id,
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = deletePosta;
