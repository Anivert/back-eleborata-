const mongoose = require("mongoose");
const WorkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, uniqe: true },
  password: { type: String, required: true },
});

const Work = mongoose.model("Work", WorkSchema);
module.exports = Work;
