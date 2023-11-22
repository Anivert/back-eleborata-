const express = require("express");
const bodyParser = require("./routes/userRouter");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const workRouter = require("./routes/workRouter"); //
const mongoose = require("mongoose");

//Mongo
const MONGO_URI =
  "mongodb+srv://admin:WGLN6tdPc2j7Pxx2@cursoelaborata.lsj801i.mongodb.net/curso-elaborataAPI";

const startSever = () => {
  try {
    mongoose.connect(MONGO_URI);
    const app = express();
    const port = 3000;
    app.use(express.json());
    app.use("/api", userRouter);
    app.use("/api", postRouter);
    app.use("/api", workRouter);

    app.listen(port, () => {
      console.log("Acessa a minha API com sucesso ");
    });
  } catch (error) {
    console.log("Problemas de conexão ");
    process.execPath;
  }
};

startSever();
