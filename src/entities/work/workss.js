const mongoose = require("mongoose");
const WorkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: { type: Date, required: true },
});

const Work = mongoose.model("work", WorkSchema);
module.exports = Work;
