const express = require("express");
// const  route  = require("./userRouter");
const getAllWork = require("../userCases/work/getAllWork");
const getWorkById = require("../userCases/work/getWorkById");
const creatWork = require("../userCases/work/creatWork");
const deleteWork = require("../userCases/work/deleteWork");
const updateWork = require("../userCases/work/updateWork");
const router = express.Router();

// na linha de baixo qué *GET* vai pegar tdo os trabalhoos
router.get("/work", getAllWork);
// na linha de baixo qué *GET* vai pegar tdo os trabalho pelo id
router.get("/work/:id", getWorkById);

// na linha de baixo qué *POsT* vai criar trabalho
router.post("/work", creatWork);
// na linha de baixo qué *DELETE* vai deletar trabalho
router.delete("/work", deleteWork);
// na linha de baixo qué *UPDATE* vai atualizar trabalho pelo nome
router.put("/work", updateWork);
// na linha de baixo qué *DELETAR* o trabalho pelo ID
router.delete("/work/:id", deleteWork);
// na linha de baixo qué *DELETAR* o trabalho pelo nome
router.delete("/work/:name", deleteWork);

module.exports = router;
