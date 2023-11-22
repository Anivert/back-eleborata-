const Post = require("../../entities/post/Postss");

async function getAllPostas(req, res) {
  try {
    const posts = await Post.find({});
    res.status(200);
    res.send(posts);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getAllPostas;
