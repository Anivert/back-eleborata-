const express = require("express");
const creatPosta = require("../userCases/posta/creatPosta");
const deletePosta = require("../userCases/posta/deletePosta");
const updatePosta = require("../userCases/posta/updatePosta");
//const router = require("./userRouter");
const getAllPostas = require("../userCases/posta/getAllposta");
const getPostaById = require("../userCases/posta/getPostaById");
const router = express.Router();

//essa function pra criar uma posta
router.post("/posta", creatPosta);
//essa function deletar uma  posta p
router.delete("/posta/:id", deletePosta);
//essa function atualizar postas
router.put("/posta", updatePosta);
//essa function pegou todas postas p
router.get("/posta", getAllPostas);
//essa function pegou todas postas pelo id
router.get("/posta/:id", getPostaById);

module.exports = router;
