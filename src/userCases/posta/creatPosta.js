const Post = require("../../entities/post/Postss");

// nas linhas de baixo que é *POST* vai cadastrar  o post
async function createPost(req, res) {
  try {
    const { name, data } = req.body;
    const newPost = await Post.create({
      name: name,
      data: data,
    });
    res.status(201);
    res.send({ post: newPost });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de dado" });
  }
}

module.exports = createPost;
