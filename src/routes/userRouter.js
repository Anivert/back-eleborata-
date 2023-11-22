const express = require("express");
const createUser = require("../userCases/users/creatUsers");
const deleteUser = require("../userCases/users/deleteUsers");
const updateUser = require("../userCases/users/updateUser");
const getAllUser = require("../userCases/users/getAlUsers");
const getUserById = require("../userCases/users/getUserById");
const loginUser = require("../userCases/users/loginUser");
const router = express.Router();

// na linha de baixo qué *GET* vai pegar tdo os usuarios
router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
// na linha de baixo que é *POST* vai cadastrar  o usuario
router.post("/user", createUser);
// na linha de baixo que é *PUT* vai atualizaar tdo os usuario
router.put("/user", updateUser);
// na linha de baixo que é *DELETAR* vai delete o usuario
router.delete("/user/:id", deleteUser);

router.post("/user/login", loginUser);

module.exports = router;
