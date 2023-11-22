const Post = require("../../entities/post/Postss");

//essa function pegou todas postas pelo id
async function getPostaById(req, res) {
  try {
    const postSelect = await Post.findById(req.params.id);
    res.status(200);
    res.send(postSelect);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getPostaById;
