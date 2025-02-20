const express = require("express");
const UsuarioController = require("../controllers/usuarioController");

const router = express.Router();

router.get("/", UsuarioController.listarUsuarios);
router.get("/:id/prestamos", UsuarioController.consultarPrestamosUsuario);
router.post("/", UsuarioController.registrarUsuario);

module.exports = router;
