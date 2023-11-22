// const Post = require("../../entities/post/Postss");

const Post = require("../../entities/post/Postss");

async function updatePosta(req, res) {
  try {
    const { name, data } = req.body;

    const updatedPost = await Post.findOneAndUpdate({
      name: name,
      data: data,
    });

    res.send(updatedPost);
  } catch (error) {
    res.status(400);
    res.send({ mensage: "erro no bano de dado" });
  }
}
module.exports = updatePosta;
