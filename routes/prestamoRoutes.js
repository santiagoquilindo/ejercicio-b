const express = require("express");
const PrestamoController = require("../controllers/prestamoController");

const router = express.Router();

router.get("/", PrestamoController.listarPrestamos);
router.post("/", PrestamoController.realizarPrestamo);
router.put("/devolucion/:id", PrestamoController.devolverLibro);

module.exports = router;

