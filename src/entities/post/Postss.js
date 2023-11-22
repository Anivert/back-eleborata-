const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: { type: Date, required: true },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
